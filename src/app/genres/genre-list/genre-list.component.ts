import {Component, OnInit} from "@angular/core";
import {GenreService} from "../shared/genre.service";
import {Genre} from "../shared/genre.model";
@Component({
  selector: 'genres',
  templateUrl: './genre-list.component.html',
})
export class GenreListComponent implements OnInit {

  genres: Genre[]

  ngOnInit() {
    this.getGenres()
  }

  constructor(
    private genreService: GenreService
  ) {}

  getGenres(): void {
    this.genreService.getGenres().subscribe(genres => this.genres = genres);
  }

}
