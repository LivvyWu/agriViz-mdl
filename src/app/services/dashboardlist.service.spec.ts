import { TestBed, inject } from '@angular/core/testing';

import { DashboardlistService } from './dashboardlist.service';

describe('DashboardlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardlistService]
    });
  });

  it('should ...', inject([DashboardlistService], (service: DashboardlistService) => {
    expect(service).toBeTruthy();
  }));
});
