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
      Authorization: `Bearer ${authToken}`,
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
      Authorization: `Bearer ${authToken}`,
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
      Authorization: `Bearer ${authToken}`,
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
      Authorization: `Bearer ${authToken}`,
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
      Authorization: `Bearer ${authToken}`,
    });

    // Make the HTTP GET request with headers
    return this.http.post<any>(`${this.apiUrl}/playlist/getAllPlaylists`, { headers });
  }

  searchPlaylists(query: string): Observable<any> {
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
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
      Authorization: `Bearer ${authToken}`,
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
      Authorization: `Bearer ${authToken}`,
    });

    // Make the HTTP GET request to fetch all users
    return this.http.get<any>(`${this.apiUrl}/user/getAllUsers`, { headers });
  }
}
