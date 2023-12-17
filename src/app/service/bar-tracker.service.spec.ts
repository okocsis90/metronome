import { TestBed } from '@angular/core/testing';

import { BarTrackerService } from './bar-tracker.service';

describe('BarTrackerService', () => {
  let service: BarTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
