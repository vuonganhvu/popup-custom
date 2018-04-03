import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.css']
})
export class ModalOptionsComponent implements OnInit {
  @ViewChild('content') modal: ElementRef;
  @Input() title: string;
  @Input() body: string;
  @Input() btnYes: string;
  @Input() btnNo: string;
  @Output() yesAction = new EventEmitter();
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.btnYes = 'YES';
    this.btnNo = 'NO';
  }

  openBackDropCustomClass() {
    this.modalService.open(this.modal, {backdropClass: 'light-blue-backdrop',  centered: true });
  }

  openWindowCustomClass() {
    this.modalService.open(this.modal, { windowClass: 'dark-modal' });
  }

  openSm() {
    this.modalService.open(this.modal, { size: 'sm' });
  }

  openLg() {
    this.modalService.open(this.modal, { size: 'lg' });
  }

  openVerticallyCentered() {
    this.modalService.open(this.modal, { centered: true });
  }

  saveLog() {
    console.log('Save Child...');
    this.yesAction.emit();
  }

}
