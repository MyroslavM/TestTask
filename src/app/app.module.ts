import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoDetailComponent } from './logo-detail/logo-detail.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { LogoCanvasComponent } from './logo-canvas/logo-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LogoDetailComponent,
    LogoCanvasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
