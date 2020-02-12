import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {BookApiService} from "../../services/book-api/book-api.service";
import {Observable} from "rxjs";
import {Book} from "../../models/book.model";

@Component({
  selector: 'adz-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  keywords: String;
  booksList$: Observable<Book[]>;


  constructor(private activatedRoute: ActivatedRoute, private bookApiService: BookApiService) { }

  ngOnInit(): void {
    this.keywords = this.activatedRoute.snapshot.paramMap.get('keyword').replace(/\s/g, "+");
    this.booksList$ = this.bookApiService.getListOfBooks(this.keywords.toString());
    this.booksList$.forEach( book => console.log(book));
  }

}
