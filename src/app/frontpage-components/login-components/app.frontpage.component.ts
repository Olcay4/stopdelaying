import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


// Login model
import { loginModel } from '../../models/login.model';

import { LoginService } from '../../service/login-service';

@Component({
    selector: 'front-page',
    moduleId: module.id,
    templateUrl: './app.frontpage.component.html'
})
export class FrontpageComponent {
    hide = true;

    // This variable stores the user credentials of the logged in user.
    user: loginModel;

    constructor(private router: Router) {
        this.user = new loginModel();
        this.user.username = 'test';
        this.user.password = 'test';
    }

    // loginClick() {

    //     this._loginService.login(this.user)
    //         // If the loginservice accepted the user credentials, send the user to the dashboard page. 
    //         .subscribe(
    //             () => this.router.navigate(['dashboard']),
    //     );
    // }

    // Link for registration page
    registrationLink() {
        this.router.navigate(['registration']);
    }

    templink() {
        this.router.navigate(['dashboard']);
    }
}