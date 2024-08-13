import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/apiconfig';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  public apiUrl = apiUrl;

  constructor(private http: HttpClient) {}

  addPlaylist(playlistData: any): Observable<any> {
    // Retrieve the token from local storage
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    // Make the HTTP POST request with headers
    return this.http.post(`${this.apiUrl}/playlist/addPlaylist`, playlistData, { headers });
  }

  getPlaylistsByUserId(): Observable<any> {
    // Retrieve user ID from local storage
    const id = localStorage.getItem('userId');
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    // Make the HTTP POST request with headers
    return this.http.post<any>(`${this.apiUrl}/playlist/getPlaylistsByUserId`, { userId: id }, { headers });
  }

  updatePlaylist(playlistData: any): Observable<any> {
    const id = playlistData._id;
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    // Make the HTTP PUT request with headers
    return this.http.put(`${this.apiUrl}/playlist/updatePlaylist/${id}`, playlistData, { headers });
  }

  deletePlaylist(playlistData: any): Observable<any> {
    const id = playlistData._id;
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    // Make the HTTP DELETE request with headers
    return this.http.delete(`${this.apiUrl}/playlist/deletePlaylist/${id}`, { headers });
  }

  getAllPlaylists(): Observable<any> {
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    // Make the HTTP GET request with headers
    return this.http.get<any>(`${this.apiUrl}/playlist/getAllPlaylists`, { headers });
  }

  searchPlaylists(query: string): Observable<any> {
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    // Make the HTTP POST request with search query
    return this.http.post<any>(`${this.apiUrl}/playlist/getAllPlaylists`, { searchValue: query }, { headers });
  }

  sortPlaylists(sort: string): Observable<any> {
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    // Make the HTTP POST request with sort option
    return this.http.post<any>(`${this.apiUrl}/playlist/getAllPlaylists`, { sortValue: sort }, { headers });
  }

  getAllUsers(): Observable<any> {
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    // Make the HTTP GET request to fetch all users
    return this.http.get<any>(`${this.apiUrl}/user/getAllUsers`, { headers });
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { apiUrl } from 'src/apiconfig';

// @Injectable({
//   providedIn: 'root',
// })
// export class PublisherService {
//   public apiUrl = apiUrl;
  
//   constructor(private http: HttpClient) {}

//   addProduct(productData: any): Observable<any> {
//     // Retrieve the token from local storage
//     const authToken = localStorage.getItem('token');
//     console.log(authToken);

//     // Set up headers with authorization
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       Authorization: `${authToken}`,
//     });

//     // Make the HTTP POST request with headers
//     return this.http.post(`${this.apiUrl}/book/addBook`, productData, {headers});
//   }

//   //pass data in getProductById
//   getProductsByUserId(): Observable<any> {
//     //pass userid
//     const id = localStorage.getItem('userId');
//     const authToken = localStorage.getItem('token');
//     console.log(authToken);

//     // Set up headers with authorization
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       Authorization: `${authToken}`,
//     });

//     return this.http.post<any>(`${this.apiUrl}/book/getBooksByUserId`, { userId: id },{headers});
//   }

//   updateProduct(productData: any): Observable<any> {
//     const id = productData._id;
//     const authToken = localStorage.getItem('token');
//     console.log(authToken);

//     // Set up headers with authorization
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       Authorization: `${authToken}`,
//     });


//     // Make the HTTP PUT request with headers
//     return this.http.put(
//       `${this.apiUrl}/book/updateBook/${id}`,
//       productData, {headers}
//     );
//   }

//   deleteProduct(productData: any): Observable<any> {
//     const id = productData._id;
//     const authToken = localStorage.getItem('token');
//     console.log(authToken);

//     // Set up headers with authorization
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       Authorization: `${authToken}`,
//     });


//     // Make the HTTP DELETE request with headers
//     return this.http.delete(`${this.apiUrl}/book/deleteBook/${id}`,{headers});
//   }

//   getAllBooks(): Observable<any> {
//     const id = localStorage.getItem('userId');
//     const authToken = localStorage.getItem('token');
//     console.log(authToken);

//     // Set up headers with authorization
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       Authorization: `${authToken}`,
//     });

//     return this.http.post<any>(`${this.apiUrl}/book/getAllBooks`, {userId: id},{headers});
//   }

//   searchProducts(query: string): Observable<any> {
//     const authToken = localStorage.getItem('token');
//     console.log(authToken);

//     // Set up headers with authorization
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       Authorization: `${authToken}`,
//     });

//     return this.http.post<any>(`${this.apiUrl}/book/getAllBooks`, { searchValue: query },{headers});
//   }

//   sortProducts(sort: string): Observable<any> {
//     const authToken = localStorage.getItem('token');
//     console.log(authToken);

//     // Set up headers with authorization
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       Authorization: `${authToken}`,
//     });

//     return this.http.post<any>(`${this.apiUrl}/book/getAllBooks`, { sortValue: sort }, {headers});
//   }

//   authorProducts(): Observable<any> {
//     const authToken = localStorage.getItem('token');
//     console.log(authToken);

//     // Set up headers with authorization
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       Authorization: `${authToken}`,
//     });

//     return this.http.get<any>(`${this.apiUrl}/user/getAllUsers`,{headers});
//   }
// }
