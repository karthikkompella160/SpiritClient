import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './dashboard/content/content.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { MycoursesComponent } from './dashboard/mycourses/mycourses.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NotesComponent } from './dashboard/notes/notes.component';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ProfileComponent } from './profile/profile.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NotificationComponent } from './notification/notification.component';
import {  NgxUiLoaderConfig, NgxUiLoaderModule } from 'ngx-ui-loader';

registerLocaleData(en);
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#ffff',
  bgsOpacity: 1,
 
  bgsSize: 40,

  fgsColor: '#0000',
  text:"Doing Science",
  textColor:"black",
  textPosition:"center-right",
  minTime:5,
  maxTime:10
  
  };

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MycoursesComponent,
    NotesComponent,
    ProfileComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),

    FormsModule,
    HttpClientModule,
    NzProgressModule,
    NzCardModule,
    NzIconModule,
    NzDropDownModule,
    NzCommentModule,
    NzButtonModule,
    NzModalModule,
    NzMessageModule,
    NzSwitchModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
