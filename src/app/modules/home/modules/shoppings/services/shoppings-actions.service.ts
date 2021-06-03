import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IShoppingItem } from '../interfaces/shopping-item.interface';
import { ShoppingsHttpService } from './shoppings-http.service';
import { ShoppingsStateService } from './shoppings-state.service';

@Injectable()
export class ShoppingsActionsService {

  constructor(
    private _toastrService: ToastrService,
    private _shoppingsHttpService: ShoppingsHttpService,
    private _shoppingsStateService: ShoppingsStateService,
  ) {
  }
  
  getItems(): void {
    this._shoppingsHttpService
      .getItems(this._shoppingsStateService.getCurrCategoryId())
      .subscribe(res => {
        this._shoppingsStateService.setItems(res);
      })
  }

  getCategories(): void {
    this._shoppingsHttpService.getCategories().subscribe(res => {
      this._shoppingsStateService.setCategories(res);
    })
  }

  createItem(opt: IShoppingItem): Observable<IShoppingItem> {
    return this._shoppingsHttpService
      .createItem(opt)
      .pipe(
        catchError(err => {
          this._toastrService.error(err.message)
          return throwError(err);
        }),
        tap(() => {
          this.getItems();
        })
      )
  }

  updateItem(opt: IShoppingItem): Observable<IShoppingItem> {
    return this._shoppingsHttpService
      .updateItem(opt)
      .pipe(
        catchError(err => {
          this._toastrService.error(err.message)
          return throwError(err);
        }),
        tap(() => {
          this.getItems();
        })
      )
  }

  deleteItem(id: string): Observable<IShoppingItem> {
    return this._shoppingsHttpService
      .deleteItem(id)
      .pipe(
        catchError(err => {
          this._toastrService.error(err.message)
          return throwError(err);
        }),
        tap(() => {
          this._shoppingsStateService.deleteItem(id);
        })
      )
  }
}
