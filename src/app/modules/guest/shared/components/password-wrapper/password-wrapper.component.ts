import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dax365-password-wrapper',
  templateUrl: './password-wrapper.component.html',
  styleUrls: ['./password-wrapper.component.scss']
})

export class PasswordWrapperComponent {

  @Input() isPasswVisible: boolean;
  @Input() isToggleBtnVisible: boolean;
  
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;

  @Output() togglePasswVisibility = new EventEmitter<void>();

  action(ev): void {
    this.togglePasswVisibility?.emit()
  }
}
