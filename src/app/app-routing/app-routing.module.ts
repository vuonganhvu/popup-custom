import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DialogComponent} from '../dialog/dialog.component';
import {ModalOptionsComponent} from '../dialog/modal-options-ng-bootstrap/modal-options.component';


const routes: Routes = [
  { path: '', redirectTo: '/dialog', pathMatch: 'full' },
  { path: 'dialog', component: DialogComponent },
  { path: 'modal', component: ModalOptionsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
