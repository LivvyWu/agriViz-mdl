import {Component, OnInit, ViewChild} from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {ChartsService} from '../../../../services/charts.service';
import {PlotlyComponent} from '../plotly/plotly.component';
import {Graph, Trace} from '../../../../models/charts';
import {DataFrame, Row} from 'dataframe-js';

@Component({
  selector: 'app-chartcreate',
  templateUrl: './chartcreate.component.html',
  styleUrls: ['./chartcreate.component.scss'],
  providers: [ChartsService]
})

/** 一堆form傳來傳去的 以後要把form改掉 **/
export class ChartCreateComponent implements OnInit {


  public myForm: FormGroup;
  public name: string;

  /** X Y軸下拉選單options(資料的欄位名稱) **/
  axisOpts: any;

  /** 上傳文件DataFrame **/
  dataframe: any;

  /** chart 主要的三個部位 **/
  datas = [];
  layout: any;
  options: any;
  displayRawData = true;

  /** 提供的圖形下拉選單options **/
  keyTypes: string[];

  cardToggle = true;

  selectedColor: {};

  @ViewChild('myPlotly') plotlyComponent: PlotlyComponent;

  constructor(private chartsService: ChartsService, private _fb: FormBuilder) {
    this.keyTypes = this.chartsService.getChartsType();
    this.layout = this.chartsService.getChartLayout();
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      traces: this._fb.array([])
    });
    this.addTrace();
  }

  initTrace() {
    return this._fb.group({
      item: ['', Validators.required],
      xAxis: ['', Validators.required],
      yAxis: ['', Validators.required],
      toggle: [true, Validators.required]
    });
  }

  addTrace() {
    const control = <FormArray>this.myForm.controls['traces'];
    const trace = this.initTrace();
    control.push(trace);
  }

  removeTrace(i: number) {
    const control = <FormArray>this.myForm.controls['traces'];
    control.removeAt(i);

    /** 從index開始删一個，就是刪掉index這個值。 **/
    this.datas.splice(i, 1);
    this.plotlyComponent.update(this.datas, this.layout, this.options, true);
  }

  save(model: Graph) {
    console.log(model);
  }

  /** 從ng-select傳回的output item value，EX: Bar、Line、Pie..... **/
  updateChartType(obj) {

    /** 要儲存item的內容 不然toggle會消失@@ 奇怪問題以後再找**/
    const control = <FormArray>this.myForm.controls['traces'];
    control.controls[obj.index]['item'] = obj.item;

    var selectedTemplate = this.chartsService.getChartTemlplates(obj.item);


    if (this.datas[obj.index] === null) {
      this.datas.push(selectedTemplate);
    } else {
      this.datas[obj.index] = selectedTemplate;
    }

    this.plotlyComponent.update(this.datas, this.layout, this.options, true);
  }

  /** dataframe套件Doc: https://gmousse.gitbooks.io/dataframe-js/#dataframe-js **/
  createDataframe(obj) {

    const opts = [];

    obj['columns'].forEach(function (column) {
      opts.push({
        value: column,
        label: column
      });
    });

    this.axisOpts = opts.splice(0);
    this.dataframe = new DataFrame(obj['data'], obj['columns']);

  }

  updateXaxis(obj) {
    this.datas[obj.index]['x'] = this.dataframe.select(obj['axisValue']).toArray();
    this.plotlyComponent.update(this.datas, this.layout, this.options, true);
  }

  updateYaxis(obj) {
    this.datas[obj.index]['y'] = this.dataframe.select(obj['axisValue']).toArray().map(function (y) {
      return +y[0];
    });
    this.plotlyComponent.update(this.datas, this.layout, this.options, true);
  }

  traceToggle(e: any, i: number) {
    e.stopPropagation();
    e.preventDefault();

    const control = <FormArray>this.myForm.controls['traces'];

    if (control.controls[i]['toggle']) {
      control.controls[i]['toggle'] = false;
    } else {
      control.controls[i]['toggle'] = true;
    }
  }

  marker_color(obj) {
    this.datas[obj.index]['marker']['color'] = obj.selectedColor;
    this.plotlyComponent.update(this.datas, this.layout, this.options, true);
  }
}
