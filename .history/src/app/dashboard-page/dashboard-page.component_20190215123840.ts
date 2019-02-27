import {  AfterViewInit, Component, OnInit ,  ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import {CoinMarketCap} from '../model/coinmarketcap';
import {ApiService} from '../api.service';

@ Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  coinMarketCapDataList : CoinMarketCap[]=[];

  constructor(private _apiService: ApiService) { 

    // console.log('Before calling service');
    // this._apiService.GetCoinMarketCapData()
    //   .subscribe(data=>{this.coinMarketCapDataList = data})
    //   console.log(this.coinMarketCapDataList.length);
  }
  ngOnInit() {
    this._apiService.GetCoinMarketCapData()
    .subscribe(data => { 
      console.log(data);
   this.policyinc = data,
  (error: any) => this.errorMessage = <any>error,
  console.log(this.policyinc);

    // this.rest.getProducts().subscribe((data: {}) => {
    //   console.log(data);
    //   this.products = data;
    // });

    console.log('Before calling service');

    // this.coinMarketCapDataList = [];
    this._apiService.GetCoinMarketCapData().subscribe(data =>{
      this.coinMarketCapDataList = data;
    });
      // console.log(data);
     
console.log(this.coinMarketCapDataList);
    // this._apiService.GetCoinMarketCapData()
    // .subscribe((data: {}) => {
    //   console.log(data);
    //   this.coinMarketCapDataList = data
    //   // this.products = data;
    // });
      // .subscribe(data=>{this.coinMarketCapDataList = data})
      
  }
}