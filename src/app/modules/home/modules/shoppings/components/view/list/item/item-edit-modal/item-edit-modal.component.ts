import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IShoppingItem } from 'src/app/modules/home/modules/shoppings/interfaces/shopping-item.interface';
import { ShoppingsActionsService } from '../../../../../services/shoppings-actions.service';

@Component({
  selector: 'dax365-shoppings-item-edit-modal',
  templateUrl: './item-edit-modal.component.html',
  styleUrls: ['./item-edit-modal.component.scss']
})
export class ShoppingsItemEditModalComponent {
  
  @Input() data: IShoppingItem;

  private _options: IShoppingItem;

  public isNotChanged = true;
  public inProgress: boolean;
  public form = new FormGroup({});
  public isSubmitted: boolean;

  @Output() close = new EventEmitter<void>();
  
  constructor(
    private _shoppingsActionsService: ShoppingsActionsService,
  ) {}
  
  changed(opt: IShoppingItem): void {
    this._options = opt;
    this.isNotChanged = 
      opt.categoryId === this.data.categoryId && 
      opt.description === this.data.description &&
      opt.name === this.data.name;
  }

  update(): void {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.inProgress = true;
      this._shoppingsActionsService
        .updateItem(this._options)
        .pipe(catchError(err => {
          this.inProgress = false;
          return throwError(err);
        }))
        .subscribe(() => {
          this.inProgress = false;
          this.close.emit();
          this._shoppingsActionsService.getItems();
        })
    }
  }
}
