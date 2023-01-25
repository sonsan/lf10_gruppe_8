import { TestBed } from '@angular/core/testing';

import { SkillsetService } from './skillset.service';

describe('SkillsetService', () => {
  let service: SkillsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
