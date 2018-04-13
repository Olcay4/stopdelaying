import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'front-page',
    moduleId: module.id,
    templateUrl: './app.frontpage.component.html'
})
export class FrontpageComponent {
    hide = true;

    constructor(private router: Router) { }

    // Link for registration page
    registrationLink() {
        this.router.navigate(['registration']);
    }
}