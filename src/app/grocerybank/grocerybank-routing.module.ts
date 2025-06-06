import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrocerybankPage } from './grocerybank.page';

const routes: Routes = [
  {
    path: '',
    component: GrocerybankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrocerybankPageRoutingModule {}
