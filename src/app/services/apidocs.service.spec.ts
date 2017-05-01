import { TestBed, inject } from '@angular/core/testing';

import { ApidocsService } from './apidocs.service';

describe('ApidocsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApidocsService]
    });
  });

  it('should ...', inject([ApidocsService], (service: ApidocsService) => {
    expect(service).toBeTruthy();
  }));
});
