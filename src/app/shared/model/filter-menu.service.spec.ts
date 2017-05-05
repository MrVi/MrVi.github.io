import { TestBed, inject } from '@angular/core/testing';

import { FilterMenuService } from './filter-menu.service';

describe('FilterMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterMenuService]
    });
  });

  it('should ...', inject([FilterMenuService], (service: FilterMenuService) => {
    expect(service).toBeTruthy();
  }));
});
