import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimationComponent } from './dialog/animation/animation.component';
import {DialogComponent} from './dialog/dialog.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ToasterComponent } from './toaster/toaster.component';
import { ModalOptionsComponent } from './dialog/modal-options/modal-options.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    DialogComponent,
    ToasterComponent,
    ModalOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
