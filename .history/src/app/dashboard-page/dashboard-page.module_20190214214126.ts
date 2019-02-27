// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DashboardPageComponent } from './dashboard-page.component';
// import { DataTablesModule } from 'angular-datatables';
// import { BrowserModule } from '@angular/platform-browser';

// @NgModule({
//   imports: [
//     CommonModule,   
//     BrowserModule,
//     DataTablesModule
//   ],

//   providers: [],
//   bootstrap: [ DashboardPageComponent ],
//   declarations: [DashboardPageComponent],

//   exports: [
//     DashboardPageComponent
//   ]
// })
// export class DashboardPageModule {

//  }
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { DashBoard } from './dashboard-page.component';

import { PagerService } from '../_services/index';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
      DashboardPageComponent 
    ],
    providers: [
        PagerService
    ],
    exports: [
         DashboardPageComponent
        ],
    bootstrap: [DashboardPageComponent ]
})

export class DashboardPageComponentModule { }