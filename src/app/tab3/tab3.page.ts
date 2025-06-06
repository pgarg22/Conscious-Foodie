import { Component,OnInit } from '@angular/core';

import { LineChartComponent } from '../line-chart/line-chart.component';
import { EditprofilePage } from '../editprofile/editprofile.page'
import { ModalController, NavController } from '@ionic/angular';
import { get, set } from "../storage.service";
import { EmailValidator } from '@angular/forms';

LineChartComponent

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{


  public name:string;
  public gender:string;
  public address:string;
  public budget:string;
  public age:string;
  public education:string;
  public employementstatus:string;
  public numberofpeople:string;
  public email:EmailValidator;
  public goal: string;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.getProfileSettings();
  }
  ionViewDidEnter() {
    this.getProfileSettings();
  }
  ionViewDidLoad() {
    this.getProfileSettings();
  }

  async editProfile() {
    const modal = await this.modalCtrl.create({
      component: EditprofilePage,
      componentProps: { 
        name: this.name,
        email: this.email,
        gender: this.gender,
        address: this.address,
        goal: this.goal,
      }
    });
    modal.onDidDismiss().then((item) => {
    
      if (item.data.saveItem) {
      this.name= item.data.name;
      this.email=item.data.email;
      this.gender= item.data.gender;
      this.address=item.data.address;
      this.goal=item.data.goal
        //this.changeValue();
      this.setProfileSettings ();
      }
   });
    

  return await modal.present();
  }


getProfileSettings () {
  this.getName();
}
setProfileSettings () {
  set("myName", this.name);  
  set("myEmail", this.email);
  set("myGender", this.gender);  
  set("myAddress", this.address);    
  set("myGoal", this.goal);  
}
async getName(){
  this.name = await get("myName");
  this.email = await get("myEmail");
  this.gender = await get("myGender");
  this.address = await get("myAddress");
  this.goal = await get("myGoal");
}

}