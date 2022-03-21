import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
  listNews: any[] = [];
  News: any[] = [];
  constructor(private _newsService: NewsService) {}

  newsGeneral() {
    this._newsService.getNews().subscribe(
      (data) => {
        this.News = data.sources;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  title = 'News City';
}
