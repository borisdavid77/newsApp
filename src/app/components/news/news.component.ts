import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  News: any[] = [];

  constructor(public _newsServices: NewsService) {}

  ngOnInit(): void {
    this._newsServices.getNews().subscribe((news: any) => {
      this.News = news.sources;
    });
  }
}
