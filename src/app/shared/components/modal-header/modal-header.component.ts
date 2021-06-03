import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dax365-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent {
  
  @Input() title: string;

  @Output() close = new EventEmitter<void>();
}
