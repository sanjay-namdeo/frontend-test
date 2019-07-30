import { Component, OnInit } from '@angular/core';
import { GiphyService } from './../service/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  query = '';

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    this.giphyService.search(this.query);
  }
}
