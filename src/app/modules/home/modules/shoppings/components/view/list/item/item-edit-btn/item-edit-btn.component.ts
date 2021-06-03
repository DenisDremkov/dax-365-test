import { Component, Input } from '@angular/core';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { IShoppingItem } from 'src/app/modules/home/modules/shoppings/interfaces/shopping-item.interface';
import { ShoppingsItemEditModalComponent } from '../item-edit-modal/item-edit-modal.component';

@Component({
  selector: 'dax365-shoppings-item-edit-btn',
  templateUrl: './item-edit-btn.component.html',
  styleUrls: ['./item-edit-btn.component.scss']
})
export class ShoppingsItemEditBtnComponent {
  
  @Input() data: IShoppingItem;

  public faEdit = faEdit;

  private modalRef: BsModalRef<ShoppingsItemEditModalComponent>;

  constructor(
    private _modalService: BsModalService
  ) {}

  openModal() {
    this.modalRef = this._modalService.show(ShoppingsItemEditModalComponent, {
      initialState: {
        data: this.data
      }
    });
    this.modalRef.content.close.subscribe(res => {
      this.modalRef.hide();
    })
  }
}
