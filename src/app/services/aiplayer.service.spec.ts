import { TestBed, inject } from '@angular/core/testing';

import { AIPlayerService } from './aiplayer.service';

describe('AIPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AIPlayerService]
    });
  });

  it('should ...', inject([AIPlayerService], (service: AIPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
