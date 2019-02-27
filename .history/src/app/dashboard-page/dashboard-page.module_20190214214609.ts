import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModuley
  ],
  declarations: [DashboardPageComponent],
  exports: [
    DashboardPageComponent
  ]
})
export class DashboardPageModule { }
