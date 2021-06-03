import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dax365-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent {
  @Input() showRequiredError: boolean;
  @Input() showEmailPatternError: boolean;
  @Input() showMinLengthError: boolean;
  @Input() showMaxLengthError: boolean;
  @Input() minLength: number;
  @Input() maxLength: number;
}
