import {   Component, OnInit  } from '@angular/core';
import {CoinMarketCap} from '../model/coinmarketcap';
import {ApiService} from '../api.service';



@ Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  

  coinMarketCapDataList : CoinMarketCap[]=[];
  errorMessage: any;
  public data:any;
  filterData:any;
  searchTextBox:

  constructor(private _apiService: ApiService) {}
  
  ngOnInit() {

    this._apiService.GetCoinMarketCapData()
    .subscribe(data => { 
      console.log(data);
   this.coinMarketCapDataList = data,
  (error: any) => this.errorMessage = <any>error
     });


    console.log("The out put is " +" "+this.coinMarketCapDataList);
  }

  search(term: string) {
    if(term.length > 0)
    {
    if(!term) {
      this.filterData = this.coinMarketCapDataList;
    } else {
      this.filterData = this.coinMarketCapDataList.filter(x => 
         x.login.trim().toLowerCase().includes(term.trim().toLowerCase())
      );
    }
  }
}
  }