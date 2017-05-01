import { Injectable } from '@angular/core';

@Injectable()
export class VisualizationsService {

  showcase = [{
    id: 'showcase-1',
    name: 'showcase1',
    charts: ['id1', 'id2', 'id3', 'id4']
  }, {
    id: 'showcase-2',
    name: 'showcase2',
    charts: ['id1', 'id2', 'id3', 'id4', 'id5']
  }, {
    id: 'showcase-3',
    name: 'showcase3',
    charts: ['id1', 'id2', 'id3', 'id4', 'id5', 'id6']
  }];

  constructor() { }

  getShowcaseList() {
    return this.showcase;
  };
}
