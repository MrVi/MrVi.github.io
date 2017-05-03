import { TestBed, inject } from '@angular/core/testing';

import { WifiService } from './wifi.service';

describe('WifiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WifiService]
    });
  });

  it('should ...', inject([WifiService], (service: WifiService) => {
    expect(service).toBeTruthy();
  }));
});
