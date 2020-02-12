export class Book {
  constructor(
    public title? : string,
    public subtitle? : string,
    public author?: string,
    public description?: string,
    public publishedDate? :string,
    public categories?: string[],
    public smallThumbnailUrl?: string
  ) {}
}
