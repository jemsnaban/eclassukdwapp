import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-assistant',
  templateUrl: 'assistant.html'
})
export class AssistantPage {

  public judul:any;
  public isi:any;
  constructor(public navCtrl: NavController, params: NavParams) {
    this.judul = params.get("judul");
    this.isi = params.get("isi");
  }

  ionViewDidLoad() {
    console.log('Hello AssistantPage Page');
  }

}
