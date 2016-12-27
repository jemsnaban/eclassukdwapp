import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { CoursesPage } from '../pages/courses/courses';
import { NotificationPage } from '../pages/notification/notification';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CourseSinglePage } from '../pages/coursesingle/coursesingle';
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';
import { AssistantPage } from '../pages/assistant/assistant';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CoursesPage,
    NotificationPage,
    HomePage,
    CoursedetailPage,
    CourseSinglePage,
    AssistantPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CoursesPage,
    NotificationPage,
    HomePage,
    CoursedetailPage,
    CourseSinglePage,
    AssistantPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
