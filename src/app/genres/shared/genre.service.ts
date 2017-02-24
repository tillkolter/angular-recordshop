
import {Headers, Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Genre} from "./genre.model";
import {Release} from "../../releases/shared/release.model";


function mapGenres(response: Response): Genre[] {
  return response.json().results.map(toGenre)
}

function mapGenre(response: Response): Genre {
  return toGenre(response.json())
}

function toGenre(g: any): Genre {
  let genre = <Genre> {
    id: g.id,
    name: g.name,
  }
  return genre
}

@Injectable()
export class GenreService {
  private rootUrl = 'http://localhost:8000/api'
  private genresUrl = `${this.rootUrl}/genres`;  // URL to web api

  constructor(private http: Http) {
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get(this.genresUrl, {headers: this.getHeaders()})
      .map(mapGenres);
  };

  getGenre(id: number): Observable<Release> {
    const url = `${this.genresUrl}/${id}`;
    return this.http.get(url, {headers: this.getHeaders()})
      .map(mapGenre);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }


}
