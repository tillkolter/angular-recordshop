import {Component, OnInit} from "@angular/core";
import {Release} from "../shared/release.model";
import {ReleaseService} from "../shared/release.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'releases',
    templateUrl: 'release-list.component.html',
    styleUrls: ['release-list.component.css'],
})
export class ReleaseListComponent implements OnInit {
    releases: Release[];

    constructor(
        private router: Router,
        private releaseService: ReleaseService,
    )
    { }

    onSelect(release: Release): void {
        this.router.navigate(['/releases', release.id]);
    }

    ngOnInit(): void {
        this.getReleases()
    }

    getReleases(): void {
        this.releaseService.getReleases().subscribe(heroes => this.releases = heroes);
    }


}
