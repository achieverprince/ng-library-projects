import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectMonthPickerComponent } from './multiselect-month-picker.component';

describe('MultiselectMonthPickerComponent', () => {
  let component: MultiselectMonthPickerComponent;
  let fixture: ComponentFixture<MultiselectMonthPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectMonthPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectMonthPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
