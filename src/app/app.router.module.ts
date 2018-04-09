import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './logincomponents/app.frontpage.component';

/**
All Link paths come here
 */
const routes: Routes = [
    { path: 'frontpage', component: FrontpageComponent },

];

/**
Declaration of all components.
 */
export const RoutingComponents = [
    FrontpageComponent
];


@NgModule({

    imports: [
        RouterModule.forRoot(routes)
    ],

    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }