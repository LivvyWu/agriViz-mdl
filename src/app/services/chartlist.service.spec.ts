import { TestBed, inject } from '@angular/core/testing';

import { ChartlistService } from './chartlist.service';

describe('ChartlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartlistService]
    });
  });

  it('should ...', inject([ChartlistService], (service: ChartlistService) => {
    expect(service).toBeTruthy();
  }));
});
