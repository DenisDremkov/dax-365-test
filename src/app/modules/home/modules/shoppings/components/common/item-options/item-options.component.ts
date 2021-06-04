import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IShoppingCategory } from '../../../interfaces/category.interface';
import { IShoppingItem } from '../../../interfaces/shopping-item.interface';
import { ShoppingsStateService } from '../../../services/shoppings-state.service';

@Component({
  selector: 'dax365-shopping-item-options',
  templateUrl: './item-options.component.html',
  styleUrls: ['./item-options.component.scss']
})
export class ShoppingItemOptionsComponent implements OnInit, OnDestroy {
  @Input() data: IShoppingItem;
  @Input() formGroup: FormGroup;
  @Input() isSubmitted: boolean;

  private _destroy$ = new Subject<void>();

  // todo - move to config file
  public readonly nameMinLength = 2;
  public readonly nameMaxLength = 100;
  public readonly descriptMinLength = 5;
  public readonly descriptMaxLength = 300;

  public nameFormCtrl: FormControl;
  public descripFormCtrl: FormControl;
  public categoryFormCtrl: FormControl;

  public categories$: Observable<Array<IShoppingCategory>>;

  @Output() changed = new EventEmitter<IShoppingItem>();

  constructor(
    private _shoppingsStateService: ShoppingsStateService
  ) { }

  ngOnInit(): void {
    const formGroup = this.formGroup;
    this.categories$ = this._shoppingsStateService.selectCategories()
    this.nameFormCtrl = this._createNameFormControl(formGroup, this.data)
    this.descripFormCtrl = this._createDescriptFormControl(formGroup, this.data);
    this.categoryFormCtrl = this._createCategoryFormControl(formGroup, this.data);
    this.formGroup.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => {
        this.changed.emit({
          id: this?.data?.id,
          name: this.nameFormCtrl.value,
          description: this.descripFormCtrl.value,
          categoryId: this.categoryFormCtrl.value,
          date: this?.data?.date
        })
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  submit(): void {
    // continue here - pass event submit for click button in parent comp
  }

  private _createNameFormControl(formGroup: FormGroup, data?: IShoppingItem): FormControl {
    const fc = new FormControl(data?.name, [
      Validators.required,
      Validators.minLength(this.nameMinLength),
      Validators.maxLength(this.nameMaxLength)
    ]);
    formGroup.addControl('name', fc);
    return fc;
  }

  private _createDescriptFormControl(formGroup: FormGroup, data?: IShoppingItem): FormControl {
    const fc = new FormControl(data?.description, [
      Validators.required,
      Validators.minLength(this.descriptMinLength),
      Validators.maxLength(this.descriptMaxLength)
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
