import { TestBed } from '@angular/core/testing';

import { UbUiService } from './ub-ui.service';

describe('UbUiService', () => {
  let service: UbUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
