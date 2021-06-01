import { Component, OnInit } from '@angular/core';
import { ShoppingsStateService } from '../../../services/shoppings-state.service';

@Component({
  selector: 'dax365-shoppings-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class ShoppingsHeaderComponent implements OnInit {

  constructor(
    private shoppingsStateService: ShoppingsStateService
  ) {}

  ngOnInit(): void {
  }

  setCategory(data: any): void {
    this.shoppingsStateService.setCurrCategoryId('');
  }
}
