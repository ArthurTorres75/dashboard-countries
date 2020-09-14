import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ICountry } from '../models/countries';
import { Countries } from '../models/mockCountries';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  countries: ICountry[];
  theme: string;
  options: any;
  constructor() {
    this.countries = Countries;
  }

  getData() {
    return of(this.countries);
  }

  handleDataTable() {
    let fixedCountries: ICountry[] = [];
    this.countries.map(data => {
      let population = data.population.replace(/,/g, '');
      let km2 = data.km2.replace(/,/g, '');
      let obj = {
        id: data.id,
        country: data.country,
        population: population,
        km2: km2
      };
      fixedCountries.push(obj);
    });
    return fixedCountries;
  }

  handleDataPie() {
    let countriesList: string[] = [];
    let seriesData: any[] = [];
    this.countries.map(data => {
      countriesList.push(data.country);
      seriesData.push({ value: parseInt(data.population.replace(/,/g, '')), name: data.country });
    });
    this.theme = 'pie';
    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        data: countriesList
      },
      series: [
        {
          name: 'Población',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: seriesData
        }
      ]
    };
  }

  handleDataBar() {
    let countriesList: string[] = [];
    let seriesData: any[] = [];
    this.countries.map(data => {
      countriesList.push(data.country);
      seriesData.push(data.km2.replace(/,/g, ''));
    });
    this.theme = 'bar';
    this.options = {
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // Indicador del eje de coordenadas, el disparador del eje de coordenadas es válido
          type: 'shadow'        //  El valor predeterminado es una línea recta, opcional: 'línea' | 'sombra'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: countriesList,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Km²',
          type: 'bar',
          barWidth: '60%',
          data: seriesData
        }
      ]
    };
  }
}
