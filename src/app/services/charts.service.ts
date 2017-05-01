import {chartsType} from '..//visual/charts/components/plotly/chartsType';
import {Injectable} from '@angular/core';

@Injectable()
export class ChartsService {


  charts = [
    {
      id: 'id1',
      name: 'chart1',
      data: [{
        x: ['giraffes', 'orangutans', 'monkeys', 'dog', 'cat'],
        y: [20, 14, 23, 30, 19],
        type: 'bar'
      }],
      layout: {
        title: 'default title',
        showlegend: true,
        legend: {
          xanchor: 'center',
          x: 0.5,
          r: 10,
          orientation: 'h'
        }
      }
    }, {
      id: 'id2',
      name: 'chart2',
      data: [{
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: 'scatter'
      }],
      layout: {
        title: 'default title',
        showlegend: true,
        legend: {
          xanchor: 'center',
          x: 0.5,
          r: 10,
          orientation: 'h'
        }
      }
    }, {
      id: 'id3',
      name: 'chart3',
      data: [{
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        type: 'line'
      }],
      layout: {
        title: 'default title',
        showlegend: true,
        legend: {
          xanchor: 'center',
          x: 0.5,
          r: 10,
          orientation: 'h'
        }
      }
    }];

  chartTemlpates = {
    'Bar': {
      x: ['Zebras', 'Lions', 'Pelicans'],
      y: [90, 40, 60],
      type: 'bar',
      name: 'New York Zoo',
      marker: {
        color: '#C8A2C8',
        line: {
          width: 2.5,
          color: 'rbg(8,48,107)'
        }
      },
      mode: 'text',
      text: ['trees', 'flowers', 'hedges']
    },
    'Line': {
      x: ['Zebras', 'Lions', 'Pelicans'],
      y: [10, 80, 45],
      type: 'line',
      name: 'San Francisco Zoo',
      text: ['trees', 'flowers', 'hedges'],
      marker: {
        color: '#C8A2C8',
        line: {
          width: 2.5,
          color: 'rbg(8,48,107)'
        }
      }
      },
      'Scatter': {
        x: ['Zebras', 'Lions', 'Pelicans'],
        y: [55, 16, 33],
        type: 'line',
        name: 'San Francisco Zoo',
        mode: 'lines+markers',
        marker: {
          color: '#C8A2C8',
          line: {
            width: 2.5,
            color: 'rbg(8,48,107)'
          }
        }
      }
    };

  constructor() {
  }

  getChartsType() {

    // var providedType = {};
    //
    // Object.keys(chartsType).forEach(function (cType) {
    //   providedType[cType] = Object.keys(chartsType[cType]);
    // });
    //
    // return providedType;
    return ['Bar', 'Line', 'Pie', 'Scatter', 'Bubble'];
  }


  getChartById(id: string) {
    return this.charts.find(c => c.id === id);
  }

  getChartTemlplates(type) {
    return this.chartTemlpates[type];
  }

  getChartLayout() {
    return {
      title: 'default title',
      showlegend: true,
      legend: {
        xanchor: 'center',
        x: 0.5,
        r: 10,
        orientation: 'h'
      }
    };
  }

  getChartList() {
    return this.charts;
  }

  deleteChartById(id: string) {
    console.log(id);
  };
}
