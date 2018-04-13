import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.router.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Angular material modules
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Login components
import { FrontpageComponent } from './frontpage-components/login-components/app.frontpage.component';
import { RegistrationComponent } from './frontpage-components/registration-components/app.registration.component';
import { DashboardComponent } from './app-components/dashboard-components/app.dashboard-components';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    FrontpageComponent,
    RegistrationComponent,
    DashboardComponent
  ],
  providers: []
})

export class AppModule { }
