import { Component, Input, OnInit } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IShoppingItem } from 'src/app/modules/home/modules/shoppings/interfaces/shopping-item.interface';
import { ShoppingsStateService } from 'src/app/modules/home/modules/shoppings/services/shoppings-state.service';
import { ShoppingsActionsService } from '../../../../services/shoppings-actions.service';

@Component({
  selector: 'dax365-shopping-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input() data: IShoppingItem;

  public inProgress: boolean;
  public readonly faTrash = faTrash;
  public categoryName$: Observable<string>;

  constructor(
    private _shoppingsStateService: ShoppingsStateService,
    private _shoppingsActionsService: ShoppingsActionsService
  ) { }

  ngOnInit(): void {
    this.categoryName$ = this._shoppingsStateService
      .selectCategories()
      .pipe(
        map(list => list?.find(i => i.id === this.data.categoryId)?.name)
      )
  }

  onDelete(): void {
    this.inProgress = true;
    this._shoppingsActionsService
      .deleteItem(this.data.id)
      .pipe(catchError(err => {
        this.inProgress = false;
        return throwError(err);
      }))
      .subscribe(() => {
        this.inProgress = false;
      })
  }
}
