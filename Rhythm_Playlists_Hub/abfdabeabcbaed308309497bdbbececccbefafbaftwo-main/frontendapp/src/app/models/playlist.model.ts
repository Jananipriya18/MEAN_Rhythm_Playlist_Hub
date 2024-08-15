export class Playlist {
  songName: string;
  genre: string;
  authorName: string;
  songMovieName: string;
  createdDate: Date;
  userId: string;

  constructor(
    songName: string,
    genre: string,
    authorName: string,
    songMovieName: string,
    createdDate: Date,
    userId: string
  ) {
    this.songName = songName;
    this.genre = genre;
    this.authorName = authorName;
    this.songMovieName = songMovieName;
    this.createdDate = createdDate || new Date(); 
    this.userId = userId;
  }
}
