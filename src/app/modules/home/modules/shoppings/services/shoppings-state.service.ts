import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { IShoppingCategory } from '../interfaces/category.interface';
import { IShoppingItem } from '../interfaces/shopping-item.interface';

@Injectable()
export class ShoppingsStateService {
  
  private _categories$ = new BehaviorSubject<Array<IShoppingCategory>>(null);
  private _categoriesObs$: Observable<Array<IShoppingCategory>> = this._categories$.asObservable();

  private _currCategoryId$ = new BehaviorSubject<string>(undefined);
  private _currCategoryIdObs$: Observable<string> = this._currCategoryId$.asObservable();

  private _items$ = new BehaviorSubject<Array<IShoppingItem>>(null);
  private _itemsObs$: Observable<Array<IShoppingItem>> = this._items$.asObservable();
  
  // categories
  setCategories(list: Array<IShoppingCategory>): void {
    this._categories$.next(list);
  }
  selectCategories(): Observable<Array<IShoppingCategory>> {
    return this._categoriesObs$;
  }

  // items
  setItems(list: Array<IShoppingItem>): void {
    this._items$.next(list);
  }
  selectItems(): Observable<Array<IShoppingItem>> {
    return this._itemsObs$;
  }
  deleteItem(id: string): void {
    const newState = this._items$.getValue().filter(i => i.id !== id)
    this._items$.next(newState);
  }
  addItem(item: IShoppingItem): void {
    const newState = [...this._items$.getValue()];
    newState.unshift(item);
    this._items$.next(newState);
  }

  // curr category
  setCurrCategoryId(id: string): void {
    this._currCategoryId$.next(id);
  }
  getCurrCategoryId(): string {
    return this._currCategoryId$.value;
  }
  selectCurrCategoryId(): Observable<string> {
    return this._currCategoryIdObs$;
  }

  clearState(): void {
    this._categories$.next(null);
    this._currCategoryId$.next(undefined);
    this._items$.next(null);
  }
}
