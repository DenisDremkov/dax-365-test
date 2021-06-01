import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { IShoppingItem } from 'src/app/modules/shoppings/interfaces/shopping-item.interface';
import { ShoppingsStateService } from 'src/app/modules/shoppings/services/shoppings-state.service';

@Component({
  selector: 'dax365-shoppings-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ShoppingsItemEditComponent implements OnInit {
  @Input() data: IShoppingItem;

  public form: FormGroup;
  public modalRef: BsModalRef;
  public editedItem$: Observable<IShoppingItem>;
  
  @ViewChild('tmpl', { static: true }) tmpl: TemplateRef<any>;

  constructor(
    private _modalService: BsModalService,
    private _shoppingsStateService: ShoppingsStateService,
  ) {}
  
  ngOnInit(): void {
    this.form = new FormGroup({});
    this.editedItem$ = this._shoppingsStateService.selectEditedItem();
    this._openModal();
  }

  private _openModal() {
    this.modalRef = this._modalService.show(this.tmpl);
  }
}
