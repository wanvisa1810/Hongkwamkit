import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  slides =[
    { id:"1", name:"Dreamword 1", image:"dw1.jpg"},
    { id:"2", name:"Dreamword 2", image:"dw4.jpg"},
    { id:"3", name:"Dreamword 3", image:"dw3.jpg"}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  /*slides = [
    { id:"", name:"Dreamword", text:"Dreamword"},
    { id:"", name:"Dreamword", text:"Dreamword"},
    { id:"", name:"Dreamword", text:"Dreamword"},
  ]*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}
