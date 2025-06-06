import { Component, OnInit } from '@angular/core';

import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage {

  title: string;
  quantity: string;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  saveItem(){

    let newItem = {
      title: this.title,
      quantity: this.quantity
    };
    this.modalCtrl.dismiss({
      'dismissed': true,
      'title': newItem.title,
      'quantity': newItem.quantity,
      'saveItem': true,
    },'','AddItemsSelector');
  }
  grocerylistdirect(){

    let newItem = {
      title: this.title,
      quantity: this.quantity
    };
    this.modalCtrl.dismiss({
      'dismissed': true,
      'title': newItem.title,
      'quantity': newItem.quantity,
      'saveItem': true,
      'grocerylistdirect': true,
    },'','AddItemsSelector');
  }

  
  close()
  {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'saveItem': false,},'','AddItemsSelector')
  }


}