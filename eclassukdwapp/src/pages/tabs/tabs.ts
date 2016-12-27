import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { CoursesPage } from '../courses/courses';
import { NotificationPage } from '../notification/notification';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = CoursesPage;
  tab3Root: any = NotificationPage;
  tab4Root: any = AboutPage;

  constructor() {

  }
}
