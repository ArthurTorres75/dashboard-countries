import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { PiechartComponent } from './piechart/piechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { TableComponent } from './table/table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [DashboardComponent, PiechartComponent, BarchartComponent, TableComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    DragDropModule
  ]
})
export class DashboardModule { }
