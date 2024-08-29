import { TestBed } from '@angular/core/testing';

import { NgxDarkModeService } from './ngx-dark-mode.service';

describe('NgxDarkModeService', () => {
  let service: NgxDarkModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDarkModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
