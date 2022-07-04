import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  accountUrl = 'http://localhost:3000/account'

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(this.accountUrl);
  }
}
