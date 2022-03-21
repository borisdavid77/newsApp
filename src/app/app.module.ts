import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { NewsComponent } from './components/news/news.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const appRutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news/:category', component: ListNewsComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListNewsComponent,
    NavbarComponent,
    SpinnerComponent,
    NewsComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
