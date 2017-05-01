import {Component, OnInit, Input, AfterViewInit} from '@angular/core';

declare var Plotly: any;
// declare var d3: any;

@Component({
  selector: 'plotlychart',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.scss']
})
export class PlotlyComponent implements OnInit, AfterViewInit {

  @Input() input_data: any;
  @Input() input_layout: any;
  @Input() input_options: any;
  @Input() input_id: any;
  @Input() input_name: any;

  data: any;
  layout: any;
  options: any;
  displayRawData: boolean;

  d3 = Plotly.d3;
  gd3: any;
  gd: any;
  WIDTH_IN_PERCENT_OF_PARENT = 100;
  HEIGHT_IN_PERCENT_OF_PARENT = 100;

  constructor() {
  }

  update(data, layout, options, displayRawData) {

    this.gd3 = this.d3.select('#myPlotlyDiv')
      .style({
        width: this.WIDTH_IN_PERCENT_OF_PARENT + '%',
        'margin-left': (100 - this.WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

        height: this.HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
        'margin-top': (100 - this.HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
      });

    this.displayRawData = displayRawData;
    this.data = data;
    this.layout = layout;
    this.options = options;

    this.gd = this.gd3.node();
    Plotly.newPlot(this.gd, this.data, this.layout);

    // window.onresize = function() {
    //   Plotly.Plots.resize(gd);
    // };

    // Plotly.newPlot('myPlotlyDiv', data, layout, options);
  }

  onResize(event) {
    Plotly.Plots.resize(this.gd);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if (this.input_id) {
      Plotly.newPlot(this.input_id, this.input_data, this.input_layout, this.input_options);
    }
  }

}
