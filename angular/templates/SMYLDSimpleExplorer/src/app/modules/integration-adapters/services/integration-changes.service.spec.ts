import { TestBed } from '@angular/core/testing';

import { IntegrationChangesService } from './integration-changes.service';

describe('IntegrationChangesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegrationChangesService = TestBed.get(IntegrationChangesService);
    expect(service).toBeTruthy();
  });
});
