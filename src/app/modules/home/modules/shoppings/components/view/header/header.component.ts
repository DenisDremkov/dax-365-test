import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IShoppingCategory } from '../../../interfaces/category.interface';
import { ShoppingsActionsService } from '../../../services/shoppings-actions.service';
import { ShoppingsStateService } from '../../../services/shoppings-state.service';

@Component({
  selector: 'dax365-shoppings-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class ShoppingsHeaderComponent implements OnInit {

  public categories$: Observable<Array<IShoppingCategory>>;

  constructor(
    private _shoppingsStateService: ShoppingsStateService,
    private _shoppingsActionsService: ShoppingsActionsService,
  ) {}

  ngOnInit(): void {
    this.categories$ = this._shoppingsStateService.selectCategories()
  }

  setCategory(data: IShoppingCategory): void {
    this._shoppingsStateService.setCurrCategoryId(data?.id);
    this._shoppingsActionsService.getItems();
  }
}
