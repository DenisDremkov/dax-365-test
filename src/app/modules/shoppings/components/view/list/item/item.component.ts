import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IShoppingItem } from 'src/app/modules/shoppings/interfaces/shopping-item.interface';
import { ShoppingsHttpService } from 'src/app/modules/shoppings/services/shoppings-http.service';
import { ShoppingsStateService } from 'src/app/modules/shoppings/services/shoppings-state.service';

@Component({
  selector: 'dax365-shopping-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input() data: IShoppingItem;

  public readonly faEdit = faEdit;
  public readonly faTrash = faTrash;

  constructor(
    private shoppingsStateService: ShoppingsStateService,
    private shoppingsHttpService: ShoppingsHttpService
  ) { }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.shoppingsStateService.setEditedItem(this.data);
  }

  onDelete(): void {
    this.shoppingsHttpService.deleteItem(this.data.id).subscribe(() => {
      this.shoppingsStateService.deleteItem(this.data.id);
    })
  }
}
