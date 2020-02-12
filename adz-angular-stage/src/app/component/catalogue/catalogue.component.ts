import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {BookApiService} from "../../services/book-api/book-api.service";
import {Book} from "../../models/book.model";

@Component({
  selector: 'adz-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  keywords: String;
  booksList$: Book[];


  constructor(private activatedRoute: ActivatedRoute, private bookApiService: BookApiService) { }

  ngOnInit(): void {
    this.keywords = this.activatedRoute.snapshot.paramMap.get('keyword').replace(/\s/g, "+");
    this.bookApiService.getListOfBooks(this.keywords.toString()).subscribe(res => this.booksList$ =res);
  }

}
