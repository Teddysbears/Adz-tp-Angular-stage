import {Book} from '../models/book.model';

export class JsonToBook {

  fromJson(book: any): Book {

    const fileds = book.volumeInfo;
    const dateYear = new Date(fileds.publishedDate).getFullYear();

    return new Book(
      fileds.title || '',
      fileds.subtitle || '',
      (fileds.authors && fileds.authors.join(', ')) || '',
      fileds.description || '',
      isNaN(dateYear) ? '' : dateYear.toString(),
      fileds.categories || '',
      (fileds.imageLinks && fileds.imageLinks.smallThumbnail) || '../assets/images/book.svg'
    );
  }
}
