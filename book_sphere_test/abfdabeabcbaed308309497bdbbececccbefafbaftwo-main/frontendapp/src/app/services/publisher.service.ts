import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/apiconfig';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  public apiUrl = apiUrl;
  
  constructor(private http: HttpClient) {}

  addProduct(productData: any): Observable<any> {
    // Retrieve the token from local storage
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    // Make the HTTP POST request with headers
    return this.http.post(`${this.apiUrl}/book/addBook`, productData, {headers});
  }

  //pass data in getProductById
  getProductsByUserId(): Observable<any> {
    //pass userid
    const id = localStorage.getItem('userId');
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    return this.http.post<any>(`${this.apiUrl}/book/getBooksByUserId`, { userId: id },{headers});
  }

  updateProduct(productData: any): Observable<any> {
    const id = productData._id;
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });


    // Make the HTTP PUT request with headers
    return this.http.put(
      `${this.apiUrl}/book/updateBook/${id}`,
      productData, {headers}
    );
  }

  deleteProduct(productData: any): Observable<any> {
    const id = productData._id;
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });


    // Make the HTTP DELETE request with headers
    return this.http.delete(`${this.apiUrl}/book/deleteBook/${id}`,{headers});
  }

  getAllBooks(): Observable<any> {
    const id = localStorage.getItem('userId');
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    return this.http.post<any>(`${this.apiUrl}/book/getAllBooks`, {userId: id},{headers});
  }

  searchProducts(query: string): Observable<any> {
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    return this.http.post<any>(`${this.apiUrl}/book/getAllBooks`, { searchValue: query },{headers});
  }

  sortProducts(sort: string): Observable<any> {
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    return this.http.post<any>(`${this.apiUrl}/book/getAllBooks`, { sortValue: sort }, {headers});
  }

  authorProducts(): Observable<any> {
    const authToken = localStorage.getItem('token');
    console.log(authToken);

    // Set up headers with authorization
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${authToken}`,
    });

    return this.http.get<any>(`${this.apiUrl}/user/getAllUsers`,{headers});
  }
}
