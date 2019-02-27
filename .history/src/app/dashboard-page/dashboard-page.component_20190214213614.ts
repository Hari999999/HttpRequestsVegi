// import {  AfterViewInit, Component, OnInit ,  ViewChild } from '@angular/core';
// import { DataTableDirective } from 'angular-datatables';

// @Component({
//   selector: 'app-dashboard-page',
//   templateUrl: './dashboard-page.component.html',
//   styleUrls: ['./dashboard-page.component.css']
// })
// export class DashboardPageComponent implements OnInit, AfterViewInit {
//   @ViewChild(DataTableDirective)
//   datatableElement: DataTableDirective;
//   dtOptions: DataTables.Settings = {};

//   constructor() { }
//   ngOnInit(): void {
//     this.dtOptions = {
//       ajax: 'data/data.json',
//       columns: [{
//         title: 'ID',
//         data: 'id'
//       }, {
//         title: 'First name',
//         data: 'firstName'
//       }, {
//         title: 'Last name',
//         data: 'lastName'
//       }]
//     };
//   }
//   ngAfterViewInit(): void {
//     this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
//       dtInstance.columns().every(function () {
//         const that = this;
//         $('input', this.footer()).on('keyup change', function () {
//           if (that.search() !== this['value']) {
//             that
//               .search(this['value'])
//               .draw();
//           }
//         });
//       });
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { PagerService } from './_services/index'

@Component ({
    moduleId: module.id,
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.css']
})

export class AppComponent implements OnInit {
    constructor(private http: Http, private pagerService: PagerService) { }

    // array of all items to be paged
    private allItems: any[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    ngOnInit() {
        // get dummy data
        this.http.get('./data-data.json')
            .map((response: Response) => response.json())
            .subscribe(data => {
                // set items to json response
                this.allItems = data;

                // initialize to page 1
                this.setPage(1);
            });
    }

    setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}

