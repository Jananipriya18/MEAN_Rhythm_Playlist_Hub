export class Book {
    title: string;
    genre: string;
    description: string;
    coverImage: string;
    publicationYear: number;
    pageCount: number;
    publisher: string;
    availableCopies: number;
    userId: string;
  
    constructor(
      title: string,
      genre: string,
      description: string,
      coverImage: string,
      publicationYear: number,
      pageCount: number,
      publisher: string,
      availableCopies: number,
      userId: string
    ) {
      this.title = title;
      this.genre = genre;
      this.description = description;
      this.coverImage = coverImage;
      this.publicationYear = publicationYear;
      this.pageCount = pageCount;
      this.publisher = publisher;
      this.availableCopies = availableCopies;
      this.userId = userId;
    }
  }
  