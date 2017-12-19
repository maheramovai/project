import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {
  data;
  code;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data =  this.navParams.get('confirmationResult');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodePage');
  }

  verifyCode(form){

  }
}
