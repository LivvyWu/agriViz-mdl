import {Injectable} from '@angular/core';

@Injectable()
export class DashboardlistService {
  dashboards = [{
    id: 'db-id1',
    name: 'dashboard1',
    charts: ['id1', 'id2', 'id3', 'id4']
  }, {
    id: 'db-id2',
    name: 'dashboard2',
    charts: ['id1', 'id2', 'id3', 'id4', 'id5']
  }, {
    id: 'db-id',
    name: 'dashboard3',
    charts: ['id1', 'id2', 'id3', 'id4', 'id5', 'id6']
  }];

  constructor() {
  }

  getDashboardList() {
    return this.dashboards;
  };

  deleteDashboardById(id: string) {
    return this.dashboards.find(d => d.id === id);
  }
}
