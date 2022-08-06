import { NgModule, Renderer2 } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';;
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_service/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_service/error.interceptor';
import { ProfilesComponent } from './profiles/profiles-list/profiles-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MatchesComponent } from './matches/matches.component';
import { appRoutes } from './routes';
import { ProfileCardsComponent } from './profiles/profile-cards/profile-cards.component';
import { ProfileDetailComponent } from './profiles/profile-detail/profile-detail.component';
import { ProfileDetailResolver } from './_resolver/profile-details.resolver';
import { ProfileListResolver } from './_resolver/profile-list.resolver';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


export function GetToken(){
  return localStorage.getItem('token');
}
// export class CustomHammerConfig extends HammerGestureConfig  {
//   overrides = {
//       pinch: { enable: false },
//       rotate: { enable: false }
//   };
// }

@NgModule({
  declarations: [							
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ProfilesComponent,
      MessagesComponent,
      MatchesComponent,
      ProfileCardsComponent,
      ProfileDetailComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: GetToken,
        whitelistedDomains:['localhost:33631'],
        blacklistedRoutes:['localhost:33631/api/auth/']

      }
    }),
  ],
  providers: [AuthService, 
    ErrorInterceptorProvider,
    ProfileDetailResolver,
    ProfileListResolver,
   // { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
