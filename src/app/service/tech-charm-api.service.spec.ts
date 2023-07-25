import { TestBed } from '@angular/core/testing';

import { TechCharmAPiService } from './tech-charm-api.service';

describe('TechCharmAPiService', () => {
  let service: TechCharmAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechCharmAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
