import { TestBed, inject } from '@angular/core/testing';

import { VisualizationsService } from './visualizations.service';

describe('VisualizationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisualizationsService]
    });
  });

  it('should ...', inject([VisualizationsService], (service: VisualizationsService) => {
    expect(service).toBeTruthy();
  }));
});
