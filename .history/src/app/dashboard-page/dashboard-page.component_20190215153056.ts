import {  AfterViewInit, Component, OnInit ,  ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import {CoinMarketCap} from '../model/coinmarketcap';
import {ApiService} from '../api.service';

declare var $;

@ Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  
  @ViewChild('DataTableDirective')                                                                                               table;
  dataTable: any;
  datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  coinMarketCapDataList : CoinMarketCap[]=[];
  errorMessage: any;

  constructor(private _apiService: ApiService) {}
  
  ngOnInit() {
    this._apiService.GetCoinMarketCapData()
    .subscribe(data => { 
      console.log(data);
   this.coinMarketCapDataList = data,
  (error: any) => this.errorMessage = <any>error,
  console.log(this.coinMarketCapDataList);
  this.dataTable = $(this.table.nativeElement);
  this.dataTable.DataTable();

    });
  }


  }