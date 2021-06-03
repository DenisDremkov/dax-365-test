import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/functions';

import { IShoppingCategory } from '../interfaces/category.interface';
import { IShoppingItem } from '../interfaces/shopping-item.interface';

@Injectable()
export class ShoppingsHttpService {

  constructor(
    private _angularFireFunctions: AngularFireFunctions,
  ) {}

  getCategories(): Observable<Array<IShoppingCategory>> {
    return this._angularFireFunctions.httpsCallable('getCategories')({});
  }

  deleteItem(id: string): Observable<any> {
    return this._angularFireFunctions.httpsCallable('deleteItem')({
      id
    });
  }

  updateItem(data: IShoppingItem): Observable<any> {
    return this._angularFireFunctions.httpsCallable('updateItem')(data);
  }

  getItems(categoryId: string): Observable<Array<IShoppingItem>> {
    return this._angularFireFunctions.httpsCallable('getItems')({
      categoryId
    });
  }

  createItem(data: IShoppingItem): Observable<any> {
    return this._angularFireFunctions.httpsCallable('addItem')(data);
  }
}
