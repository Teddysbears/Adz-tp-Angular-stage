import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BookApiService} from '../../services/book-api/book-api.service';
import {Book} from '../../models/book.model';
import { MatDialog } from '@angular/material/dialog';
import {BookDialogOverviewComponent} from '../book-dialog-overview/book-dialog-overview.component';

@Component({
  selector: 'adz-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  keywords: string;
  booksList$: Book[];


  constructor(private activatedRoute: ActivatedRoute, private bookApiService: BookApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.keywords = this.activatedRoute.snapshot.paramMap.get('keyword').replace(/\s/g, '+');
    this.bookApiService.getListOfBooks(this.keywords.toString()).subscribe(res => this.booksList$ = res);
  }


  openBookDialog(book: Book): void {
    const bookRef = this.dialog.open(BookDialogOverviewComponent, {
      width: '80%',
      data: book
    });

    bookRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
