import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'dashboard-page',
    moduleId: module.id,
    templateUrl: './app.dashboard-components.html'
})
export class DashboardComponent {

    constructor(private router: Router) { }

    logout() {
        this.router.navigate(['login']);
    }
}