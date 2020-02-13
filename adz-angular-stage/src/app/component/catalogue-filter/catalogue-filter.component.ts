import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


import * as _moment from 'moment';
import {Moment} from 'moment';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
  },
};

@Component({
  selector: 'adz-catalogue-filter',
  templateUrl: './catalogue-filter.component.html',
  styleUrls: ['./catalogue-filter.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})

export class CatalogueFilterComponent implements OnInit {

  filters: FormGroup;
  subtitle: string;
  category: string;
  author: string;
  date = new FormControl(moment());

  constructor(private formBuilder: FormBuilder) {
      this.filters = formBuilder.group({
        subtitle: this.subtitle,
        category: this.category,
        author: this.author,
        date: this.date
      });

  }

  ngOnInit(): void {
  }

  chosenYearHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close()
  }



}
