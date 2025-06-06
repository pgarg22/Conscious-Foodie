import { Component, OnInit } from '@angular/core';

import { ModalController, NavController } from '@ionic/angular';
import { title } from 'process';
import { AddItemPage } from '../add-item/add-item.page'
import { ItemDetailPage } from '../item-detail/item-detail.page';
import { get, set } from "../storage.service";


@Component({
  selector: 'app-grocerybank',
  templateUrl: './grocerybank.page.html',
  styleUrls: ['./grocerybank.page.scss'],
})
export class GrocerybankPage {

  public itembank=[];
  public dis:boolean;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }
  ionViewDidEnter() {
       //var = this.nativeStorage.getItem('items');
    this.componentDidLoad();
    if(this.itembank == null)
    {
      this.itembank= [];
    }
  }

  async componentDidLoad() {
    this.itembank = await get("itembank");
  }

  addItem()
  {
    this.addItemBank();
  }

  async addItemBank() {
    const modal = await this.modalCtrl.create({
      component: AddItemPage,
      id: 'AddItemsSelector'
    });
    modal.onDidDismiss().then((item) => {
    
      if (item.data.saveItem) {
        this.saveItem(item.data.title,item.data.quantity,item.data.grocerylistdirect);
        this.changeValue();

      }
   });
   return await modal.present();

  }
    
   saveItem(title, quantity,direct)
   {
    if(this.itembank == null)
      {
        this.itembank= [];
      }
    this.itembank.push({title: title, quantity: quantity});
    this.dis= direct;
  }
  changeValue() {
    set("itembank", this.itembank);  
  }


  async viewItem(item) {
    const modal = await this.modalCtrl.create({
      component: ItemDetailPage,
      componentProps: { 
        title: item.title,
        quantity:item.quantity,
      }
    });
    return await modal.present();
  }

  deleteTask(index){
    this.itembank.splice(index, 1);
}

saveItemGroceryList(i){
  let newItem= this.itembank[i];
  this.modalCtrl.dismiss({
    'dismissed': true,
    'title': newItem.title,
    'quantity': newItem.quantity,
    'saveItem': true,
  });
}
close()
{
  this.modalCtrl.dismiss({
    'dismissed': true,
    'saveItem': false,})
}
}