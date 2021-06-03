import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ShoppingsHttpService } from './services/shoppings-http.service';
import { ShoppingsStateService } from './services/shoppings-state.service';
import { ShoppingItemComponent } from './components/view/list/item/item.component';
import { ShoppingListComponent } from './components/view/list/list.component';
import { ShoppingsAddItemComponent } from './components/view/header/add-item/add-item.component';
import { ShoppingsHeaderComponent } from './components/view/header/header.component';
import { ShoppingsViewComponent } from './components/view/view.component';
import { ShoppingsRoutingModule } from './shoppings.routes';
import { ShoppingItemOptionsComponent } from './components/common/item-options/item-options.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingsActionsService } from './services/shoppings-actions.service';
import { ShoppingsItemEditModalComponent } from './components/view/list/item/item-edit-modal/item-edit-modal.component';
import { ShoppingsItemEditBtnComponent } from './components/view/list/item/item-edit-btn/item-edit-btn.component';

@NgModule({
  imports: [
    // ang
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // libs
    NgSelectModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    
    // app
    ShoppingsRoutingModule,
    SharedModule
  ],

  declarations: [
    ShoppingListComponent,
    ShoppingItemComponent,
    ShoppingsAddItemComponent,
    ShoppingsHeaderComponent,
    ShoppingsViewComponent,
    ShoppingItemOptionsComponent,
    ShoppingsItemEditModalComponent,
    ShoppingsItemEditBtnComponent,
  ],

  providers: [
    ShoppingsHttpService,
    ShoppingsStateService,
    ShoppingsActionsService
  ],
})
export class ShoppingsModule {}
