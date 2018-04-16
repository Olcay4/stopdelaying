import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Frontpage components
import { FrontpageComponent } from './frontpage-components/login-components/app.frontpage.component';
import { RegistrationComponent } from './frontpage-components/registration-components/app.registration.component';
import { DashboardComponent } from './app-components/dashboard-components/app.dashboard-components';
import { TaskComponent } from './app-components/task-components/app.task-components';
import { AchievementComponent } from './app-components/achievement-components/app.achievement-components';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: FrontpageComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'task', component: TaskComponent },
    { path: 'achievement', component: AchievementComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }