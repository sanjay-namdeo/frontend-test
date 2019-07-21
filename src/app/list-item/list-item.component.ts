import { Component, OnInit, Input } from '@angular/core';
import { GiphyService } from '../service/giphy.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent implements OnInit {
  @Input() giphy: {id: string, slug: string};

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
  }

  createFullUrl = gifId => {
    return this.giphyService.getFullUrl(gifId);
  }
}
