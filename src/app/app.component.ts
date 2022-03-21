import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listNews: any[] = [];
  News: any[] = [];
  category: string;

  constructor(private _newsService: NewsService) {
    this.category = '';
  }

  searchNewsByCategory(param: any) {
    this.category = param;
    console.log('param', param);
    this._newsService.getNewsByCategory(param).subscribe(
      (data) => {
        console.log('data', data);
        this.listNews = data.sources;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  title = 'News City';
}
