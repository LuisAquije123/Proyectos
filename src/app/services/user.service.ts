import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) {}

  // user.service.ts
  getUsers(): Observable<User[]> {
    console.log('Realizando solicitud HTTP a ' + this.apiUrl);
    return this.http.get<User[]>(this.apiUrl).pipe(
      tap(data => console.log('Datos recibidos:', data)),
      catchError(error => {
        console.error('Error al realizar la solicitud HTTP:', error);
        throw error;
      })
    );
  }

  registerUser(user: { user: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

}
