import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { UserInterface } from '../interfaces/user';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUser (): Observable<any> {
    return this.http.get('http://localhost:3000/account');
  }
}
