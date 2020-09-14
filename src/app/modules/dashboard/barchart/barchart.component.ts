import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  public theme: string;
  public options: any;

  constructor(
    private chartService: ChartService
  ) { }

  ngOnInit(): void {
    this.setGraphic();
  }

  public setGraphic() {
    this.chartService.handleDataBar();
    this.theme = this.chartService.theme;
    this.options = this.chartService.options;
}
}
