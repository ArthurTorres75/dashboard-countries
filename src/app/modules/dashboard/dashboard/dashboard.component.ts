import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ChartService } from '../services/chart.service';
import { PiechartComponent } from '../piechart/piechart.component';
import { BarchartComponent } from '../barchart/barchart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(PiechartComponent) pie!: PiechartComponent;
  @ViewChild(BarchartComponent) bar!: BarchartComponent;

  constructor(
    public toastr: ToastrService,
    private chartService: ChartService
  ) { }

  ngOnInit(): void {
    this.chartService.getData().subscribe(data => {
    });
  }

}
