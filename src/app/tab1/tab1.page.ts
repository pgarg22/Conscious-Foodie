import { Component } from '@angular/core';

import { ModalController, NavController } from '@ionic/angular';
import { ItemDetailPage } from '../item-detail/item-detail.page';
import {GrocerybankPage} from '../grocerybank/grocerybank.page'
import { get, set } from "../storage.service";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public test:string;
  public items=[];
  public uniqueBoughtItems= [];
  public boughtitems=[];
  public boughtitemscount=[];
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
  }
   ionViewDidLoad() {
    }
    ionViewDidEnter() {
         //var = this.nativeStorage.getItem('items');
      this.componentDidLoad();
      if(this.items == null)
      {
        this.items= [];
      }
      this.boughtCount();

  }
  async addItem() {
    const modal = await this.modalCtrl.create({
      component: GrocerybankPage,
      id: 'GroceryBankSelector'
    });
    modal.onDidDismiss().then((item) => {
    
      if (item.data.saveItem) {
        this.saveItem(item.data.title,item.data.quantity);
        this.changeValue();
      }
   });
    

  return await modal.present();
  }


  saveItem(title, quantity){
    if(this.items == null)
      {
        this.items= [];
      }
    this.items.push({title: title, quantity: quantity});
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

  async componentDidLoad() {
    this.items = await get("myItems");
    this.boughtitems = await get("myboughtItems");
  }

  changeValue() {
    set("myItems", this.items);  
  }
  deleteTask(index){
    this.items.splice(index, 1);
}
boughtTask(index)
{
  let currentDate = new Date();
  let timestamp = currentDate.getTime();
  let item= this.items[index];
  if(this.boughtitems == null)
  {
    this.boughtitems= [];
  }
this.boughtitems.push({title: item.title, quantity: item.quantity, timestamp: timestamp});
set("myboughtItems", this.boughtitems); 
this.deleteTask(index);
set("myItems", this.items);  
}

boughtCount()
{
   
}

}