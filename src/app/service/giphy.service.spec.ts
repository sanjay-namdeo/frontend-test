import { TestBed } from '@angular/core/testing';

import { GiphyService } from './giphy.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';

describe('GiphyService', () => {
  let service: GiphyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });
    service = TestBed.get(GiphyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return giphy media image url', () => {
    const url = service.getFullUrl('testId');
    expect(url).toEqual(`https://media.giphy.com/media/testId/giphy.gif`);
  });
});
