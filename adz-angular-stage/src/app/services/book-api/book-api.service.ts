import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { ApiConfigService, BooksApiServiceConfig } from '../api-config/api-config.service';
import {Book} from '../../models/book.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {JsonToBook} from '../../converter/JsonToBook';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  configBook: BooksApiServiceConfig;
  private jsonToBook: JsonToBook;


  constructor(private httpClient: HttpClient) {
    this.configBook = ApiConfigService.configBook.booksService;
    this.jsonToBook = new JsonToBook();
  }

  public getListOfBooks(keywords: string): Observable<Book[]> {

    const params: HttpParams = new HttpParams()
      .set('q', keywords)
      .set('maxResults', String(this.configBook.maxItemsInResponse))
      .set('key', this.configBook.apiKey);

    return this.httpClient.get<Book[]>(this.configBook.apiUrl, {params})
      .pipe(
        map((books: any) => books.items ? this.convertJsonToBook(books.items) : [])
      );

  }

  private convertJsonToBook(collection: any[]): Book[] {
    console.log('nop');
    return collection.map(item => this.jsonToBook.fromJson(item));
  }

}
