// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/apiconfig';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public apiUrl = apiUrl;

  constructor(private http: HttpClient) {}

  loginUser(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/login`, credentials);
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/signup`, user);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  // // Store token in local storage
  // setAuthToken(token: string): void {
  //   localStorage.setItem(this.tokenKey, token);
  // }

  // // Retrieve token from local storage
  // getAuthToken(): string | null {
  //   return localStorage.getItem(this.tokenKey);
  // }

  // // Remove token from local storage
  // removeAuthToken(): void {
  //   localStorage.removeItem(this.tokenKey);
  // }
}
