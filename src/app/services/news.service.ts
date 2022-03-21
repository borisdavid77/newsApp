import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    const URL =
      'https://newsapi.org/v2/top-headlines/sources?apiKey=a9cc9827d2114ff1b66c2afc6652d53e';
    return this.http.get(URL);
  }

  getNewsByCategory(category: any): Observable<any> {
    const URL =
      'https://newsapi.org/v2/top-headlines/sources?category=' +
      category +
      '&apiKey=a9cc9827d2114ff1b66c2afc6652d53e';
    return this.http.get(URL);
  }
}
