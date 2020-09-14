import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  public theme: string;
  public options: any;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.setGraphic();
  }

  public setGraphic() {
      this.chartService.handleDataPie();
      this.theme = this.chartService.theme;
      this.options = this.chartService.options;
  }

}
