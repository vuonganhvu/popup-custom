import {Component, OnInit, Input} from '@angular/core';
import {DataPopup} from "../../model/dataPopup";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() dataPopup;

  constructor() {
  }

  ngOnInit() {
  }

  closePopup() {
    this.dataPopup.active = false;
    let thisClass = this;
    setTimeout(function() {
      thisClass.dataPopup.showPopup = false;
    }, 300);
  }

}
