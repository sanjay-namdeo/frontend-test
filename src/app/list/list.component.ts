import { Component, OnInit, OnDestroy } from '@angular/core';

import { PAGE_SIZE,  getFullUrl } from './../shared/constants';
import { GiphyService } from './../service/giphy.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit, OnDestroy {
giphyData: any[];
  collectionSize;
  pageSize;
  page;
  subscription;

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    this.pageSize = PAGE_SIZE;
    this.page = 1;
    this.subscription = this.giphyService.resultChanged.subscribe(() => {
      const result = this.giphyService.getData();
      this.giphyData = result.data;
      this.collectionSize = result.collectionSize;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createFullUrl = gifId => {
    return getFullUrl(gifId);
  }

  onPageChange(pageNumber: number) {
    this.giphyService.changePage(pageNumber);
    this.page = pageNumber;
  }
}