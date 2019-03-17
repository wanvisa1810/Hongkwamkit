import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { NewClassPage } from '../new-class/new-class';
import { AddMemberPage } from '../add-member/add-member';
import { SlidesPage } from '../slides/slides';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoAbout(){
    this.navCtrl.setRoot(AboutPage);
  }
  gotoNewClass(){
    this.navCtrl.push(NewClassPage);
}
  gotoAddMember(){
    this.navCtrl.push(AddMemberPage);
}
  gotoSlides()
{
  this.navCtrl.push(SlidesPage);
}}
