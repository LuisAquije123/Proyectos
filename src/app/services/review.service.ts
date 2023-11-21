import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Review} from "../models/review";

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080/api/v1'; // Ajusta la URL base de tu API

  constructor(private http: HttpClient) {}
  getReviews(footwearId: string): Observable<Review[]> {
    const url = `${this.apiUrl}/${footwearId}/reviews`;
    return this.http.get<Review[]>(url);
  }

  submitReview(footwearId: string, review: any): Observable<Review> {
    const url = `${this.apiUrl}/${footwearId}/reviews`;
    return this.http.post<Review>(url, review);
  }
}
