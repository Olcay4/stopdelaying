import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'menubar-page',
    moduleId: module.id,
    templateUrl: './app.menubar-components.html'
})
export class MenubarComponent {

    constructor(private router: Router, private _location: Location) { }

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