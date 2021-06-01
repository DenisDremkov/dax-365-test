import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { catchError, debounceTime } from 'rxjs/operators';
import { IShoppingCategory } from '../interfaces/category.interface';
import { IShoppingItem } from '../interfaces/shopping-item.interface';

@Injectable()
export class ShoppingsHttpService {
  constructor(private _http: HttpClient) {}


  getCategories(): Observable<Array<IShoppingCategory>> {
    return this._http.get<Array<IShoppingCategory>>('todo').pipe(
      debounceTime(1000),
      catchError(err => {
        return of([
          { id: '1', name: 'cat 1' },
          { id: '2', name: 'cat 2' },
          { id: '3', name: 'cat 3' },
          { id: '4', name: 'cat 4' },
        ])
      })
    )
  }

  deleteItem(id: string): Observable<any> {
    return this._http.delete<any>('todo').pipe(
      debounceTime(1000),
      catchError(err => {
        return of(true)
      })
    )
  }

  updateItem(item: IShoppingItem): Observable<any> {
    return this._http.patch<any>('todo', {}).pipe(
      debounceTime(1000),
      catchError(err => {
        return of(true)
      })
    )
  }

  getItems(): Observable<Array<IShoppingItem>> {
    return this._http.get<Array<IShoppingItem>>('todo').pipe(
      debounceTime(1000),
      catchError(err => {
        return of([
          {
            id: '1',
            name: '1 lorem asdfasf asdf asd fa ',
            description: '1 lorem asdfasf asdf asd fa ',
            date: '1 lorem asdfasf asdf asd fa ',
            categoryId: '1 lorem asdfasf asdf asd fa ',
          },
          {
            id: '2',
            name: '2 lorem asdfasf asdf asd fa ',
            description: '2 lorem asdfasf asdf asd fa ',
            date: '2 lorem asdfasf asdf asd fa ',
            categoryId: '2 lorem asdfasf asdf asd fa ',
          }
        ])
      })
    )
  }
}
