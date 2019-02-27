import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';
import {DataTableModule} from 'ang'

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    BrowserModule
  ],
  declarations: [DashboardPageComponent],
  exports: [
    DashboardPageComponent
  ],
  providers: [],
  bootstrap: [DashboardPageComponent]
})
export class DashboardPageModule { }