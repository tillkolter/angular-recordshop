import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Release}           from '../releases/shared/release.model';
@Injectable()
export class SearchService {
  private rootUrl = 'http://localhost:8000/api'
  private searchUrl = `${this.rootUrl}/search`

  private releases: Release[]

  constructor(private http: Http) {
  }

  search(term: string): Observable<Release[]> {
    return this.http
      .get(`${this.searchUrl}/?q=${term}`)
      .map(response => response.json().results as Release[]);
  }
}
