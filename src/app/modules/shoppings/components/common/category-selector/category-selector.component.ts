import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IShoppingCategory } from '../../../interfaces/category.interface';
import { ShoppingsHttpService } from '../../../services/shoppings-http.service';
import { ShoppingsStateService } from '../../../services/shoppings-state.service';

@Component({
  selector: 'dax365-shoppings-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class ShoppingsCategorySelectorComponent implements OnInit {
  @Input() formCtrl: FormControl = new FormControl();

  public categories$: Observable<Array<IShoppingCategory>>;
  
  constructor(private shoppingsStateService: ShoppingsStateService) {}
  
  @Output() changed = new EventEmitter<any>();
  
  ngOnInit(): void {
    this.categories$ = this.shoppingsStateService.selectCategories()
  }

  onChange(ev): void {
    console.log(ev)
  } 
}
