import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrocerybankPageRoutingModule } from './grocerybank-routing.module';

import { GrocerybankPage } from './grocerybank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrocerybankPageRoutingModule
  ],
  declarations: [GrocerybankPage]
})
export class GrocerybankPageModule {}
