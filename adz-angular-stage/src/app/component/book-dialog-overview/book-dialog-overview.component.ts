  import {Component, Inject, OnInit} from '@angular/core';
  import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
  import {Book} from "../../models/book.model";

@Component({
  selector: 'adz-book-dialog-overview',
  templateUrl: './book-dialog-overview.component.html',
  styleUrls: ['./book-dialog-overview.component.css']
})
export class BookDialogOverviewComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<BookDialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
