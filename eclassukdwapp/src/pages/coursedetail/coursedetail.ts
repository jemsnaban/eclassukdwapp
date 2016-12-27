import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CourseSinglePage } from '../coursesingle/coursesingle';
import { AssistantPage } from '../assistant/assistant';

@Component({
  selector: 'page-coursedetail',
  templateUrl: 'coursedetail.html'
})
export class CoursedetailPage {
  public judul:any;
  public isi:any;
  constructor(public navCtrl: NavController, params: NavParams) {
    this.judul = params.get("judul");
    this.isi = params.get("isi");
  }

  goToMateri(title){
    this.navCtrl.push(CourseSinglePage,  {
        judul: title,
        isi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    });
  }

  goToAsisten(title){
    this.navCtrl.push(AssistantPage,  {
        judul: title,
        isi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    });
  }

  ionViewDidLoad() {
    console.log('Hello CoursedetailPage Page');
  }

}
