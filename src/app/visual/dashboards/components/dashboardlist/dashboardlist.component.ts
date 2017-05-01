import {Component, OnInit} from '@angular/core';
import {DashboardlistService} from '../../../../services/dashboardlist.service';

@Component({
  selector: 'app-dashboardlist',
  templateUrl: './dashboardlist.component.html',
  styleUrls: ['./dashboardlist.component.scss'],
  providers: [DashboardlistService]
})
export class DashboardListComponent implements OnInit {

  dashboardList = [];

  constructor(private dashboardListService: DashboardlistService) {
    this.dashboardList = this.dashboardListService.getDashboardList();
  }

  removeDashboard(i: number, id: string) {
    this.dashboardList.splice(i, 1);
    this.dashboardListService.deleteDashboardById(id);
  }

  ngOnInit() {
  }

}
