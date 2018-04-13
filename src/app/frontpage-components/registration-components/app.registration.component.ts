import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'registration-page',
    moduleId: module.id,
    templateUrl: './app.registration.component.html'
})
export class RegistrationComponent {
    hide = true;

    constructor(private route: ActivatedRoute, private router: Router) { }

    // Link for registration page
    loginLink() {
        this.router.navigate(['login']);
    }
}