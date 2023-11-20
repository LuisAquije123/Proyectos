import { Injectable } from '@angular/core';
import {Footwear} from "../models/footwear";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FootwearService {
  private apiUrl = 'http://20.125.136.147:8080/api/v1/footwears';

  constructor(private http: HttpClient) { }

  getFootwears(): Observable<Footwear[]> {
    return this.http.get<Footwear[]>(this.apiUrl);
  }

  getFootwearById(id: string): Observable<Footwear> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Footwear>(url);
  }
}
