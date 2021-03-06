import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    br
  ],
  declarations: [DashboardPageComponent],
  exports: [
    DashboardPageComponent
  ],
})
export class DashboardPageModule { }
