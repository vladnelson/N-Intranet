import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './_View/login/login.component';
import { AuthenficationService } from './_services/authenfication.service';

import { HomeComponent } from './_View/home/home.component';
import { RegisterComponent } from './_View/register/register.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from './_View/alert/alert.component';
import { AuthCouteauSuisse } from './_couteauSuisse/auth.couteauSuisse';

import { TokenInterceptor } from './_couteauSuisse/TokenInterceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthenficationService,
    AuthCouteauSuisse,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
