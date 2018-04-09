import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.router.module';
import { RoutingComponents } from './app.router.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Angular material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { FrontpageComponent } from './logincomponents/app.frontpage.component';

@NgModule({
  declarations: [
    FrontpageComponent, RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [FrontpageComponent]
})
export class AppModule { }
