import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {
  @Input() message: string = 'Are you sure?';
  @Output() confirmed: EventEmitter<void> = new EventEmitter<void>();
  @Output() canceled: EventEmitter<void> = new EventEmitter<void>();

  confirm() {
    this.confirmed.emit();
  }

  cancel() {
    this.canceled.emit();
  }
}
