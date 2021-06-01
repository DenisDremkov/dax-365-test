import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IShoppingItem } from '../../../interfaces/shopping-item.interface';
import { ShoppingsStateService } from '../../../services/shoppings-state.service';

@Component({
  selector: 'dax365-shopping-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  
  public items$: Observable<Array<IShoppingItem>>;
  public editedItem$: Observable<IShoppingItem>;
  
  constructor(
    private _shoppingsStateService: ShoppingsStateService
  ) {}

  ngOnInit(): void {
    this.items$ = this._shoppingsStateService.selectItems();
    this.editedItem$ = this._shoppingsStateService.selectEditedItem();
  }
}
