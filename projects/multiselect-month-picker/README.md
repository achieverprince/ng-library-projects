# MultiselectMonthPicker

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Installing

Run `npm i multiselect-month-picker --save`.

## Source Code - GitHug
https://github.com/achieverprince/ng-library-projects/tree/master/projects/multiselect-month-picker

## Usage

HTML:
```html
<lib-multiselect-month-picker [elementId]="multiselectMonthPicker1" #multiselectMonthPickerComponent [minMonth]="201812" (onCancelled)="MultiSelectMonthPickerCalcelled()" (onSelected)="MultiSelectMonthPickerSelected($event)"></lib-multiselect-month-picker>
```

## Events

 **(onSelected)** - Passes selectedMonths: Array<number>
  
 **(onCancelled)** - No argument passed
 
## Supported Parameters

**elementId** (optional) - Unique ID to be passed when you have more than one picked in same screen - string

**selectedMonths** (optional) - Selected month in a array - ['201901','201903'] ([yyyymm]) - Array

**minMonth** (optional) - Pass Minimum month to limit the selection - '201901' (yyyymm) - (string)

**maxMonth** (optional) - Pass Maximum month to limit the selection - '201903' (yyyymm) - (string)

**currentYear** (optional) - Pass a default current Year (number)

## Methods

**OpenPicker(selectedMonths)** - selectedMonths [Array] (optional). To open the popup you need to call this function.

## Screenshots

![Screenshot 1](https://raw.githubusercontent.com/achieverprince/ng-library-projects/master/projects/multiselect-month-picker/screenshots/mp_ss_1.JPG)

![Screenshot 2](https://raw.githubusercontent.com/achieverprince/ng-library-projects/master/projects/multiselect-month-picker/screenshots/mp_ss_2.JPG)

![Screenshot 3](https://raw.githubusercontent.com/achieverprince/ng-library-projects/master/projects/multiselect-month-picker/screenshots/mp_ss_3.JPG)
