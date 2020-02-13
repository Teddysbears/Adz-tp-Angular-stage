import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


// import * as _moment from 'moment';
// import {Moment} from 'moment';
// import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import {MatDatepicker} from '@angular/material/datepicker';
import {Book} from "../../models/book.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BookApiService} from "../../services/book-api/book-api.service";

// const moment = _moment;
//
// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'YYYY',
//   },
//   display: {
//     dateInput: 'YYYY',
//     monthYearLabel: 'YYYY',
//     dateA11yLabel: 'LL',
//   },
// };

@Component({
  selector: 'adz-catalogue-filter',
  templateUrl: './catalogue-filter.component.html',
  styleUrls: ['./catalogue-filter.component.css']
  // providers: [
  //   {
  //     provide: DateAdapter,
  //     useClass: MomentDateAdapter,
  //     deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  //   },
  //
  //   {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  // ],
})

export class CatalogueFilterComponent implements OnInit {

  filters: FormGroup;
  subtitle: string;
  category: string;
  author: string;
  //date = new FormControl(moment());
  date: string;

  keywords: string;
  booksList$: Book[];
  booksListInstance: Book[];

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private bookApiService: BookApiService, private router: Router) {
    this.filters = formBuilder.group({
      subtitle: this.subtitle,
      category: this.category,
      author: this.author,
      date: this.date
    });

  }

  ngOnInit(): void {
    this.keywords = this.activatedRoute.snapshot.paramMap.get('keyword').replace(/\s/g, '+');
    this.bookApiService.getListOfBooks(this.keywords.toString()).subscribe(res => this.booksList$ = res);
    this.bookApiService.getListOfBooks(this.keywords.toString()).subscribe(res => this.booksListInstance = res)
  }

  // chosenYearHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
  //   const ctrlValue = this.date.value;
  //   ctrlValue.year(normalizedYear.year());
  //   this.date.setValue(ctrlValue);
  //   datepicker.close()
  // }
  isRealValue(value: string) {
    return value && value !== 'null' && value !== 'undefined' && value != '';
  }

  submitForm() {
    this.refreshBookList();
    let appFilters = Object.values(this.filters.value);
    let subtitle = String(appFilters[0]);
    let category = String(appFilters[1]);
    let author = String(appFilters[2]);
    let date = String(appFilters[3]);
    if(this.isRealValue(subtitle)) this.subtitleFilter(subtitle);
    if(this.isRealValue(category)) this.categoryFilter(category);
    if(this.isRealValue(author)) this.authorFilter(author);
    if(this.isRealValue(date)) this.dateFilter(date);
  }

  private refreshBookList() {
    for( let j = 0; j<this.booksListInstance.length; j++) {
      this.booksList$[j] = this.booksListInstance[j];
    }
  }


  private subtitleFilter(subtitle: string) {
    for (let i = 0; i<this.booksList$.length; i++){
      let book = this.booksList$[i];
      if(!book.subtitle.includes(subtitle)) {
        this.booksList$.splice(i,1);
        i--;
      }
    }
  }

  private categoryFilter(category: string) {
    for (let i = 0; i<this.booksList$.length; i++){
      let book = this.booksList$[i];
      if(!this.isRealValue(book.categories[0]) ||(this.isRealValue(book.categories[0]) && !this.containsCategory(book.categories, category))) {
        console.log('Im in');
        this.booksList$.splice(i,1);
        i--;
      }
    }
  }

  private authorFilter(author: string) {
    for (let i = 0; i<this.booksList$.length; i++){
      let book = this.booksList$[i];
      if(!book.author.includes(author)) {
        this.booksList$.splice(i,1);
        i--;
      }
    }
  }

  private dateFilter(date: string) {
    for (let i = 0; i<this.booksList$.length; i++){
      let book = this.booksList$[i];
      if(!book.publishedDate.includes(date)) {
        this.booksList$.splice(i,1);
        i--;
      }
    }
  }

  private static containsCategory(categories: string[], category: string) {

    for (let i = 0; i<categories.length; i++) {
      if(categories[i].includes(category)) return true;
    }
    return false;
  }


  Onclick() {
    this.router.navigate(['']);
  }
}