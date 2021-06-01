import { Component, OnInit } from '@angular/core';

import { ShoppingsHttpService } from '../../services/shoppings-http.service';
import { ShoppingsStateService } from '../../services/shoppings-state.service';

@Component({
  selector: 'dax365-shoppings-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ShoppingsViewComponent implements OnInit {

  constructor(
    private shoppingsHttpService: ShoppingsHttpService, 
    private shoppingsStateService: ShoppingsStateService
  ) {}

  ngOnInit(): void {
    this._getCategories();
    this._getItems();
  }

  private _getCategories(): void {
    this.shoppingsHttpService.getCategories().subscribe(res => {
      this.shoppingsStateService.setCategories(res);
    })
  }

  private _getItems(): void {
    this.shoppingsHttpService.getItems().subscribe(res => {
      this.shoppingsStateService.setItems(res);
    })
  }
}
