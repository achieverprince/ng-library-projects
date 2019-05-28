import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { MultiselectMonthPickerComponent } from './multiselect-month-picker.component';

@NgModule({
  declarations: [MultiselectMonthPickerComponent],
  imports: [
  ],
  exports: [MultiselectMonthPickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class MultiselectMonthPickerModule { }
