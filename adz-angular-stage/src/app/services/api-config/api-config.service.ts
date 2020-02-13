import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export interface BooksApiServiceConfig {
  apiKey: string;
  apiUrl: string;
  maxItemsInResponse: number;
  responseItems: string[];
}

export interface ConfigBook {
  booksService: BooksApiServiceConfig;
}

@Injectable({
  providedIn: 'root'
})

export class ApiConfigService {

  static configBook: ConfigBook;

  constructor(private httpClient: HttpClient) {}

  public getConfigBook() {
    return new Promise((resolve, reject) => {
      this.httpClient.get<ConfigBook>('assets/api-config.json')
        .toPromise()
        .then(data => resolve(data))
        .catch(error => reject(error));
    })
      .then((config: ConfigBook) => {
        ApiConfigService.configBook  = config;
      })
      .catch(error => {
        console.log(error);
      });

  }

}
