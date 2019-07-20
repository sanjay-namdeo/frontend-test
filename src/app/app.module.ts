import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { GiphyService } from './service/giphy.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
