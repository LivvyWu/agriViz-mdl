import {Component, OnInit} from '@angular/core';
import {ChartsService} from '../../../../services/charts.service';

@Component({
  selector: 'app-chartlist',
  templateUrl: './chartlist.component.html',
  styleUrls: ['./chartlist.component.scss'],
  providers: [ChartsService]
})
export class ChartListComponent implements OnInit {

  chartlist = [];


  constructor(private chartsService: ChartsService) {
    this.chartlist = this.chartsService.getChartList();
  }

  removeChart(i: number, id: string){

    // 從index開始删一個，就是刪掉index這個值。
    this.chartlist.splice(i, 1);
    this.chartsService.deleteChartById(id);
  }

  ngOnInit() {}

}
