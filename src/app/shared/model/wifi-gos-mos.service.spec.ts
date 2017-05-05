import { TestBed, inject } from '@angular/core/testing';

import { WifiGosMosService } from './wifi-gos-mos.service';

describe('WifiGosMosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WifiGosMosService]
    });
  });

  it('should ...', inject([WifiGosMosService], (service: WifiGosMosService) => {
    expect(service).toBeTruthy();
  }));
});
