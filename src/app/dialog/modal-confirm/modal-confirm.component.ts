import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  @Input() title = 'Modal with component';
  @Input() message = 'Message here...';
  @ViewChild('confirm') modal = ElementRef;
  modalRef: BsModalRef;
  ngOnInit(): void {
  }

  constructor(public modalService: BsModalService) { }

  public clickOk() {
    console.log('Click on...');
  }

  showConfirm() {
    this.modalRef = this.modalService.show(this.modal, { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false });
    console.log(this.modalRef);
  }
}
