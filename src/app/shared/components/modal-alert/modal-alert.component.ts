import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss'],
})
export class ModalAlertComponent {
  @Input() title: String = '';
  @Input() subtitle: String = '';
  @Input() titleDismiss: String = 'No';
  @Input() titleConfirm: String = 'Yes';

  @Input() modalError: boolean = false;

  @Output() eventDismiss = new EventEmitter();
  dismiss() {
    this.eventDismiss.emit('');
  }

  @Output() eventConfirm = new EventEmitter();
  confirm() {
    this.eventConfirm.emit('');
  }
}
