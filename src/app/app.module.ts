import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ReleaseListComponent} from "./releases/release-list/release-list.component";
import {ReleaseDetailComponent} from "./releases/release/release.component";
import {ReleaseService} from "./releases/shared/release.service";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {SearchComponent} from "./search/search.component";
import {GenreService} from "./genres/shared/genre.service";
import {GenreListComponent} from "./genres/genre-list/genre-list.component";

// Imports for loading & configuring the in-memory web api

@NgModule({
  declarations: [
    AppComponent,
    ReleaseDetailComponent,
    ReleaseListComponent,
    SearchComponent,
    DashboardComponent,
    GenreListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ReleaseService, GenreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
