/**
 * Created by tillkolter on 17/02/17.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Release} from "../shared/release.model";
import {ReleaseService} from "../shared/release.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location}                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'release.component.html',
    styleUrls: ['release.component.css'],
})
export class ReleaseDetailComponent implements OnInit {
    @Input() release: Release;

    constructor(private heroService: ReleaseService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getRelease(params['id']))
            .subscribe(hero => this.release = hero);
    }

    goBack(): void {
        this.location.back()
    }


}
