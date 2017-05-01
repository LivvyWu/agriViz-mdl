import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ChartsService} from '../../../../services/charts.service';

@Component({
  selector: 'app-chartedit',
  templateUrl: './chartedit.component.html',
  styleUrls: ['./chartedit.component.scss'],
  providers: [ChartsService]
})
export class ChartEditComponent implements OnInit {

  id: string;
  chart: {};

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private chartsService: ChartsService) {

  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.chart = this.chartsService.getChartById(this.id);
      console.log(this.chart);
    });
  }

}
