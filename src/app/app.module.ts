import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimationComponent } from './dialog/animation/animation.component';
import {DialogComponent} from './dialog/dialog.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ToasterComponent } from './toaster/toaster.component';
import { ModalOptionsComponent } from './dialog/modal-options-ng-bootstrap/modal-options.component';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalStack} from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { ModalConfirmComponent } from './dialog/modal-confirm/modal-confirm.component';
import {ModalModule} from 'ngx-bootstrap';
import { PopupComponent } from './dialog/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    DialogComponent,
    ToasterComponent,
    ModalOptionsComponent,
    ModalConfirmComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [NgbModal, NgbModalStack],
  bootstrap: [AppComponent]
})
export class AppModule { }
