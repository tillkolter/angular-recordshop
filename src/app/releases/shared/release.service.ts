/**
 * Created by tillkolter on 18/02/17.
 */
import {Injectable} from "@angular/core";
import {Release} from "./release.model";
import {Http, Headers, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Observable} from "rxjs";
import {toArtist} from "../../artists/common/artists.service";
import {toLabel} from "../../labels/shared/labels.service";

export function mapReleases(response: Response): Release[] {
  return response.json().results.map(toRelease)
}

export function mapRelease(response: Response): Release {
  return toRelease(response.json());
}

function toRelease(r: any): Release {
  let release = <Release> {
    id: r.id,
    description: r.description,
    label: toLabel(r.label),
    name: r.name,
    releaseDate: new Date(r.release_date),
    artist: toArtist(r.main_artist),
  }
  return release
}

@Injectable()
export class ReleaseService {
  private rootUrl = 'http://localhost:8000/api'
  private releasesUrl = `${this.rootUrl}/releases`;  // URL to web api

  constructor(private http: Http) {
  }

  getReleases(): Observable<Release[]> {
    return this.http.get(this.releasesUrl, {headers: this.getHeaders()})
      .map(mapReleases);
  };

  getRelease(id: number): Observable<Release> {
    const url = `${this.releasesUrl}/${id}`;
    return this.http.get(url, {headers: this.getHeaders()})
      .map(mapRelease);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
