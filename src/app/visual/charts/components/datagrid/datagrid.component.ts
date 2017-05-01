import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit, AfterViewInit {

  settings: any;
  source: LocalDataSource;

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
