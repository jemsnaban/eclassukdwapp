import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-coursesingle',
  templateUrl: 'coursesingle.html'
})
export class CourseSinglePage {
  public judul:any;
  public isi:any;
  constructor(public navCtrl: NavController, params: NavParams) {
    this.judul = params.get("judul");
    this.isi = params.get("isi");
  }

}
