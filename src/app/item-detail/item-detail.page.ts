import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage  {


  title;
  quantity;

  constructor(public navParams: NavParams){

  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.quantity = this.navParams.get('item').quantity;
  }

}
