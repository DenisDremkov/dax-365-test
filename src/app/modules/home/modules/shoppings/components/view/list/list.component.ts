import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IShoppingItem } from '../../../interfaces/shopping-item.interface';
import { ShoppingsActionsService } from '../../../services/shoppings-actions.service';
import { ShoppingsStateService } from '../../../services/shoppings-state.service';

@Component({
  selector: 'dax365-shopping-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  
  public items$: Observable<Array<IShoppingItem>>;

  constructor(
    private _shoppingsStateService: ShoppingsStateService,
    private _shoppingsActionsService: ShoppingsActionsService
  ) {}

  ngOnInit(): void {
    this.items$ = this._shoppingsStateService
      .selectItems()
      .pipe(
        map(list => {
          return list 
            ? list.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            : null
        })
      );
    this._shoppingsActionsService.getItems();
  }
}
