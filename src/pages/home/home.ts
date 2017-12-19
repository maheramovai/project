import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  phoneNumber: any = '';

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public afAuth:
    AngularFireAuth) {

  }

  sendCode(form) {
    this.afAuth.auth.signInWithPhoneNumber(form.value.phoneNumber, new firebase.auth.RecaptchaVerifier('re-container', {
      'size': 'invisible'
    })).then(data => {
      this.navCtrl.push('CodePage', { confirmationResult: data })
    }).catch(err => {
      console.log(err);
    })
  }

  // signIn() {
  //   this.navCtrl.push(LoginPage);
  // }

  // register() {
  //   this.navCtrl.push(RegisterPage);
  // }


}
