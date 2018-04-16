import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'menubar-page',
    moduleId: module.id,
    templateUrl: './app.menubar-components.html'
})
export class MenubarComponent {

    actionBarTitle: string;

    constructor(private router: Router, private _location: Location, private activatedRoute: ActivatedRoute) {

        // This checks the title of the Activatedrouter path and takes the actionbar title
        this.activatedRoute.data
            .map(() => this.activatedRoute)
            .map((route) => {
                while (route.firstChild) route = route.firstChild; return route;
            })
            .mergeMap((route) => route.data)
            .subscribe(event => {
                this.actionBarTitle = event['actionBarTitle'];
            });

    }

    achievements() {
        this.router.navigate(['achievement']);
    }

    logout() {
        this.router.navigate(['login']);
    }

    goback() {
        this._location.back();
    }
}