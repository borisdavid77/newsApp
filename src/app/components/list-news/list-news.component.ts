import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css'],
})
export class ListNewsComponent implements OnInit {
  @Input() listNews: any;

  category: any;

  constructor(
    private _newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.category = '';
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.searchNewsByCategory();
  }
  searchNewsByCategory() {
    console.log('param', this.category);
    this._newsService.getNewsByCategory(this.category).subscribe(
      (data) => {
        console.log('data', data);
        this.listNews = data.sources;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
