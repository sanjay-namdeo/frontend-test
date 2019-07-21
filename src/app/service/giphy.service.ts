import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { GIPHY_API_KEY, GIPHY_HOST_URL, GIPHY_SEARCH_QUERY, PAGE_SIZE } from './../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  giphyData: any;
  searchTerm: string;
  resultChanged = new Subject<any>();
  constructor(private http: HttpClient) { }

  // Get image data
  getData(): any {
    const offset = this.giphyData.pagination.offset;
    const pageNumber = offset === 0 ? 1 : ((offset + PAGE_SIZE) / PAGE_SIZE);
    return {
      data: this.giphyData.data,
      collectionSize: this.giphyData.pagination.total_count,
      pageNumber
    };
  }

  // Search giphy and update to observers
  search(query) {
    this.searchTerm = query;
    const SEARCH_URL = `${GIPHY_HOST_URL}${GIPHY_SEARCH_QUERY}?api_key=${GIPHY_API_KEY}&limit=9&offset=0&q=${query}`;
    this.http.get(SEARCH_URL).subscribe(res => {
      this.giphyData = res;
      this.resultChanged.next(res);
    });
  }

  // Called from pagination to switch between pages
  changePage(pageNumber: number) {
    const offset = (pageNumber - 1) * PAGE_SIZE;
    const SEARCH_URL = `${GIPHY_HOST_URL}${GIPHY_SEARCH_QUERY}?api_key=${GIPHY_API_KEY}&limit=9&offset=${offset}&q=${this.searchTerm}`;
    this.http.get(SEARCH_URL).subscribe(res => {
      this.giphyData = res;
      this.resultChanged.next(res);
    });
  }

  getFullUrl(gifId) {
    return `https://media.giphy.com/media/${gifId}/giphy.gif`;
  };
}
