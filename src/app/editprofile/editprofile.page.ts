import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { NavController, ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  name: string;
  email:EmailValidator;
  gender: string;
  address: string;
  goal: string;
  
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    ) { }

  ngOnInit() {
  }


  saveProfile(){

    

    this.modalCtrl.dismiss({
      'dismissed': true,
      'name': this.name,
      'email': this.email,
      'address': this.address,
      'gender': this.gender,
      'goal': this.goal,
      'saveItem': true,
    });
  }
  close()
  {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'saveItem': false,})
  }

  ionViewDidLoad() {
    this.name = this.navParams.get('item').name;
    this.email = this.navParams.get('item').email;
    this.gender = this.navParams.get('item').gender;
    this.address = this.navParams.get('item').address;
    this.goal = this.navParams.get('item').goal;

  }

}