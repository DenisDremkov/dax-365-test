import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IShoppingItem } from '../../../interfaces/shopping-item.interface';

enum ActionTypes {
  EDIT,
  CREATE,
}

@Component({
  selector: 'dax365-shopping-item-options',
  templateUrl: './item-options.component.html',
  styleUrls: ['./item-options.component.scss']
})
export class ShoppingItemOptionsComponent implements OnInit {
  @Input() data: IShoppingItem;
  @Input() formGroup: FormGroup;

  public nameFormCtrl: FormControl;
  public descripFormCtrl: FormControl;
  public categoryFormCtrl: FormControl;
  public actionType: ActionTypes;

  @Output() formInited = new EventEmitter<FormGroup>()

  constructor() { }

  ngOnInit(): void {
    const formGroup = new FormGroup({});
    this.nameFormCtrl = this._createNameFormControl(formGroup, this. data)
    this.descripFormCtrl = this._createDescriptFormControl(formGroup, this. data);
    this.categoryFormCtrl = this._createCategoryFormControl(formGroup, this. data);
  }

  private _createNameFormControl(formGroup: FormGroup, data?: IShoppingItem): FormControl {
    const fc = new FormControl(data?.name, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100)
    ]);
    formGroup.addControl('name', fc);
    return fc;
  }

  private _createDescriptFormControl(formGroup: FormGroup, data?: IShoppingItem): FormControl {
    const fc = new FormControl(data?.description, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100)
    ]);
    formGroup.addControl('description', fc);
    return fc;
  }

  private _createCategoryFormControl(formGroup: FormGroup, data: IShoppingItem): FormControl {
    const fc = new FormControl(data?.categoryId, [
      Validators.required
    ]); 
    formGroup.addControl('category', fc);
    return fc;
  }
}
