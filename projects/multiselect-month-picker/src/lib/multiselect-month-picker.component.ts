import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-multiselect-month-picker',
  templateUrl: 'multiselect-month-picker.component.html',
  styleUrls: ['multiselect-month-picker.component.css']
})
export class MultiselectMonthPickerComponent implements OnInit, AfterViewInit {

  @Input() elementId: string = 'multiselect-month-picker';
  @Input() selectedMonths: Array<number> = [];
  @Input() minMonth: string = '';//201801
  @Input() maxMonth: string = '';//201901
  @Input() currentYear: number = new Date().getFullYear();
  @Output() onSelected = new EventEmitter<Array<number>>();
  @Output() onCancelled = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

  }

  SetAvailableMonthsRange(){

  }

  OpenPicker(selectedMonths = []){
    this.selectedMonths = selectedMonths;
    $('#'+this.elementId+' .pickerPopup').show();
  }

  GetMonthClassName(month){
    var monthClass = 'mpMonth ';
    var foundIndex = this.selectedMonths.indexOf(this.currentYear+month);
    if (foundIndex == -1)//Not Found
    {

    }
    else
    {
      monthClass += 'monthSelected ';
    }
    var monthNoValue = parseInt(this.currentYear+month);
    if(this.minMonth != '')
    {
      if(monthNoValue >= parseInt(this.minMonth)){
        //valid month
      }
      else
      {
        monthClass += 'disabledMonth ';
      }
    }
    if(this.maxMonth != ''){
      if(monthNoValue <= parseInt(this.maxMonth)){
        //valid month
      }
      else
      {
        monthClass += 'disabledMonth ';
      }
    }

    return monthClass;
  }

  SelectMonth(month) {
    var monthClass = this.GetMonthClassName(month);
    if(monthClass.indexOf('disabledMonth') != -1)
    {
      return;
    }
    var foundIndex = this.selectedMonths.indexOf(this.currentYear+month);
    if (foundIndex == -1)//Not Found
    {
      this.selectedMonths.push(this.currentYear+month);
    }
    else
    {
      this.selectedMonths.splice(foundIndex,1);
    }
  }
  GoToPreviousYear(){
    this.currentYear--;
  }

  GoToNextYear(){
    this.currentYear++;
  }

  OKButtonClicked(){
    $('#'+this.elementId+' .pickerPopup').hide();
    this.onSelected.emit(this.selectedMonths);
  }

  CancelButtonClicked(){
    $('#'+this.elementId+' .pickerPopup').hide();
    this.onCancelled.emit();
  }
}
