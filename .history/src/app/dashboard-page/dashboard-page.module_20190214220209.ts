import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardPageComponent} from './app.component';

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
})
export class DashboardPageModule { }
