import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalOptionsComponent} from './modal-options-ng-bootstrap/modal-options.component';
import {ModalConfirmComponent} from "./modal-confirm/modal-confirm.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {
  @ViewChild('confirm1') confirm1: ModalOptionsComponent;
  @ViewChild('confirm2') confirm2: ModalConfirmComponent;

  dataForPopup = {
    active: false,
    showPopup: false
  };

  activepopup: boolean = false;
  showpopup: boolean = false;
  showModal = false;
  bodyText: string;
  title: string;

  constructor() {
  }

  ngOnInit() {
    this.bodyText = 'Hello Vuong Anh Vu';
    this.title = 'Title confirm';
  }

  showConfirm() {
    this.confirm1.openBackDropCustomClass();
  }

  yesAction() {
    console.log('ok...');
  }

  showConfirm2() {
    this.showModal = true;
    this.confirm2.showConfirm();
  }

  showaaa() {
    console.log(this.dataForPopup);
    this.dataForPopup.showPopup = true;
    const thisClass = this;
    setTimeout(function () {
      thisClass.dataForPopup.active = true;
    }, 5);
  }


}
