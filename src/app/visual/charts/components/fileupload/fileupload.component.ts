import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import {IWorkBook, IWorkSheet} from 'xlsx';
import {LocalDataSource} from 'ng2-smart-table';
import {DatagridComponent} from '../datagrid/datagrid.component';
import {DatagridDirective} from '../datagrid/datagrid.directive';
import {DataFrame, Row} from 'dataframe-js';

const XLSX = window['XLSX'];

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

  @ViewChild(DatagridDirective) appDatagrid: DatagridDirective;

  // 回傳給Parents: ChartCreateComponent的觸發事件
  @Output('dataframe')
  dataframe = new EventEmitter<Object>();

  settings = {};
  source: LocalDataSource;

  reader: FileReader = new FileReader();
  files: FileList = null;
  workBook: IWorkBook = null;
  workSheetNames: string[] = [];
  workSheets: { [sheet: string]: IWorkSheet } = null;
  currentWorkSheet: IWorkSheet = null;

  constructor() {
    this.reader.onload = this.setReaderOnloadHandler();
  }

  readFile(e: any) {
    e.stopPropagation();
    e.preventDefault();
    // const files = e.dataTransfer.files;
    const files = e.target.files;
    if (files) {
      this.files = files;
      // console.log(e, files);

      // 取第一個檔
      const file = files[0];

      this.reader.readAsBinaryString(file);
    }

  }

  private setReaderOnloadHandler() {

    return () => {
      const data = this.reader.result;
      this.workBook = XLSX.read(data, {type: 'binary'});
      this.workSheetNames = this.workBook.SheetNames;
      this.workSheets = this.workBook.Sheets;
      this.currentWorkSheet = this.workSheets[this.workSheetNames[0]];//this.workSheets['評量成績'];
      /**
       * header : 0 => 標題欄位名（內容）當 key 產生物件 => default
       * header : 1 => 標題欄位名（內容）為第一個陣列，第二個陣列以後是資料，數字索引
       * header : 'A' => 標題欄位名（字母）當 key 產生物件，第一個物件是標題欄位名（內容），第二個物件以後是資料
       */

      /*********************************產生data及欄位名稱陣列***************************************/

      const tableData = XLSX.utils.sheet_to_json(this.currentWorkSheet, {header: 0});
      const headers = Object.keys(tableData[0]); // 欄位名稱陣列

      /*********************************smart table start***************************************/

      var columns = {};

      headers.forEach(function (h) {
        columns[h] = {
          title: h.toUpperCase()
        };
      });
      this.settings['columns'] = columns; // smart table的欄位名稱
      this.settings['actions'] = false;
      this.settings['add'] = false; // smart table不允許新增
      this.settings['edit'] = false; // smart table不允許修改
      this.settings['delete'] = false; // smart table不允許刪除
      this.source = new LocalDataSource(tableData);
      const datagridComponentRef = this.appDatagrid.createDatagrid(DatagridComponent);

      datagridComponentRef.instance.source = this.source;
      datagridComponentRef.instance.settings = this.settings;

      /*********************************smart table end***************************************/

      this.dataframe.emit({'data': tableData, 'columns': headers}); // 把dataframe及headers回傳給chartcreatecomponent。
    }
  }


  ngOnInit() {
  }

}
