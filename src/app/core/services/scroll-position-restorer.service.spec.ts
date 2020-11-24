import { TestBed } from '@angular/core/testing';

import { ScrollPositionRestorerService } from './scroll-position-restorer.service';

describe('ScrollPositionRestorerService', () => {
  let service: ScrollPositionRestorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollPositionRestorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
