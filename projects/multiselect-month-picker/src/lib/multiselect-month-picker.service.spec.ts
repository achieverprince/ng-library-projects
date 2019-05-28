import { TestBed } from '@angular/core/testing';

import { MultiselectMonthPickerService } from './multiselect-month-picker.service';

describe('MultiselectMonthPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiselectMonthPickerService = TestBed.get(MultiselectMonthPickerService);
    expect(service).toBeTruthy();
  });
});
