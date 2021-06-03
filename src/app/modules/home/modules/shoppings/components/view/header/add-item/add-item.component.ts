import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IShoppingItem } from 'src/app/modules/home/modules/shoppings/interfaces/shopping-item.interface';
import { ShoppingsActionsService } from '../../../../services/shoppings-actions.service';

@Component({
  selector: 'dax365-shoppings-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class ShoppingsAddItemComponent {

  private _itemOptions: IShoppingItem;

  public modalRef: BsModalRef;
  public form: FormGroup;
  public isSubmitted: boolean;
  public inProgress: boolean;
  
  constructor(
    private _modalService: BsModalService,
    private _shoppingsActionsService: ShoppingsActionsService
  ) {}

  openModal(template: TemplateRef<any>) {
    this.form = new FormGroup({});
    this.modalRef = this._modalService.show(template);
    this.modalRef.onHidden.subscribe(res => {
      this.isSubmitted = false;
      this.form = null;
    })
  }

  changed(ev: IShoppingItem): void {
    this._itemOptions = ev;
  }

  addItem(): void {
    this.isSubmitted = true;
    if (this.form.valid) {
      delete this._itemOptions.id;
      this.inProgress = true;
      this._shoppingsActionsService
        .createItem(this._itemOptions)
        .pipe(catchError(err => {
          this.inProgress = false;
          return throwError(err);
        }))
        .subscribe(() => {
          this.inProgress = false;
          this.modalRef.hide();
        })
    }
  }
}
