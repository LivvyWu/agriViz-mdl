import { Component, OnInit } from '@angular/core';
import {VisualizationsService} from '../../services/visualizations.service';

@Component({
  selector: 'app-visualizations',
  templateUrl: './visualizations.component.html',
  styleUrls: ['./visualizations.component.scss'],
  providers: [VisualizationsService]
})
export class VisualizationsComponent implements OnInit {

 showcaseList: {};

  constructor( private visualizationsService: VisualizationsService) {
    this.showcaseList = this.visualizationsService.getShowcaseList();
  }

  ngOnInit() {
  }

}
