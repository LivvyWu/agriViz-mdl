import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ChartsService} from '../../../../services/charts.service';

@Component({
  selector: 'trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.scss'],
  providers: [ChartsService]
})

export class TraceComponent implements OnInit {

  @Input('group')
  public traceForm: FormGroup;

  @Input('index')
  public index: string;

  @Input('axisOpts')
  public axisOpts: any;

  @Input('cardToggle')
  public cardToggle: boolean;

  // 回傳給Parents的觸發事件
  @Output('selectItemEvent')
  selectItemEvent = new EventEmitter<Object>();

  // 回傳給Parents的觸發事件
  @Output('xAxisValue')
  xAxisValue = new EventEmitter<Object>();

  // 回傳給Parents的觸發事件
  @Output('yAxisValue')
  yAxisValue = new EventEmitter<Object>();

  // 回傳給Parents的觸發事件
  @Output('axisValue')
  axisValue = new EventEmitter<Object>();

  // 回傳給Parents的觸發事件
  @Output('selectedColor')
  selectedColor = new EventEmitter<Object>();

  options: Array<any> = [];
  selection: Array<string>;

  constructor(private chartsService: ChartsService) {

    const items = chartsService.getChartsType();

    const opts = new Array();

    for (let i = 0; i < items.length; i++) {
      opts[i] = {
        value: items[i],
        label: items[i]
      };
    }

    this.options = opts.slice(0);
  }

  ngOnInit() {
    this.traceForm.addControl('item', new FormControl(''));
    this.traceForm.addControl('xAxis', new FormControl(''));
    this.traceForm.addControl('yAxis', new FormControl(''));
  }

  onChartSelected(item) {
    // 回傳給Parents的觸發事件
    this.selectItemEvent.emit({'item': item.value, 'index': this.index});
  }

  onXAxisUpdate(xAxis) {
    this.xAxisValue.emit({'axisValue': xAxis.value, 'index': this.index, 'axis': 'x'});
  }

  onYAxisUpdate(yAxis) {
    this.yAxisValue.emit({'axisValue': yAxis.value, 'index': this.index, 'axis': 'y'});
  }

  changeColor(e: any) {
    this.selectedColor.emit({'selectedColor': e.target.value, 'index': this.index});
  }

}
