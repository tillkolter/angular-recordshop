import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ReleaseListComponent }      from './releases/release-list/release-list.component';
import { ReleaseDetailComponent }  from './releases/release/release.component';
import {GenreListComponent} from "./genres/genre-list/genre-list.component";
const routes: Routes = [
    { path: '', redirectTo: '/releases', pathMatch: 'full' },
    { path: 'releases',     component: ReleaseListComponent },
    { path: 'releases/:id', component: ReleaseDetailComponent },
    { path: 'genres',     component: GenreListComponent },
    { path: 'genres/:id', component: ReleaseDetailComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
