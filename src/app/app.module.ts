import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { GiphyService } from './service/giphy.service';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
