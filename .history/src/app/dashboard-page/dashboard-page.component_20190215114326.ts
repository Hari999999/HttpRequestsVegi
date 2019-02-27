import {  AfterViewInit, Component, OnInit ,  ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import {CoinMarketCap} from '../model/coinmarketcap';

@ Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  

  constructor() { }
  ngOnInit(): void {
    this.dtOptions = {
      ajax: './data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'Name',
        data: 'name'
      }, {
        title: 'Symbol',
        data: 'symbol'
      },
      {
        title: 'Rank',
        data: 'rank'
      },
      {
        title: 'Price',
        data: 'price_usd'
      },
    
    ]
    };
  }
  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }
}


