import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.router.module';
import { RoutingComponents } from './app.router.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Angular material modules
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { FrontpageComponent } from './frontpage-components/login-components/app.frontpage.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    FrontpageComponent,
    RoutingComponents
  ],
  providers: [],
  bootstrap: [FrontpageComponent]
})
export class AppModule { }
