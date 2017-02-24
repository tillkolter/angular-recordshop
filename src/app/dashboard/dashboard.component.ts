import {Component, OnInit} from "@angular/core";
import {ReleaseService} from "../releases/shared/release.service";
import {Release} from "../releases/shared/release.model";
/**
 * Created by tillkolter on 18/02/17.
 */

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {
  releases: Release[] = [];

  constructor(private heroService: ReleaseService) {
  }

  ngOnInit(): void {
    this.heroService.getReleases()
      .subscribe(heroes => this.releases = heroes.slice(1, 5));
  }

}
