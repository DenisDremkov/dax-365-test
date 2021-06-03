import { Component, OnInit } from '@angular/core';

import { ShoppingsActionsService } from '../../services/shoppings-actions.service';
import { ShoppingsStateService } from '../../services/shoppings-state.service';

@Component({
  selector: 'dax365-shoppings-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ShoppingsViewComponent implements OnInit {

  constructor(
    private _shoppingsStateService: ShoppingsStateService,
    private _shoppingsActionsService: ShoppingsActionsService,
  ) {}

  ngOnInit(): void {
    this._shoppingsActionsService.getCategories();
  }

  ngOnDestroy(): void {
    this._shoppingsStateService.clearState();
  }
}
