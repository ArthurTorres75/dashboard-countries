import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {CdkDragDrop, moveItemInArray, CdkDragStart, CdkDropList} from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';
import { ChartService } from '../services/chart.service';
import { ICountry } from '../models/countries';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public columns: string[] = ['id', 'country', 'population', 'km2'];
  public dataSource: MatTableDataSource<ICountry>;
 
  constructor(
    private chartService: ChartService
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ICountry>(this.chartService.handleDataTable())
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event) {
      moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
