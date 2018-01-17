import { Injectable } from '@angular/core';
import { LoginViewModel } from '../_viewModels/login-view-model';
import { Utilisateur } from '../_models/utilisateur';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map';




@Injectable()
export class AuthenficationService {
 
  private LoginUrl= 'http://localhost:57304/api/Account/login';
   private ab = 'http://localhost:57304/api/values/5';
  // private LoginUrl =  'api/Account/login';


  constructor(private http: HttpClient) {
   }


  //Service qui permet la connection 
  Login(LesLogses: LoginViewModel) {
   /*  let token; =  sessionStorage.getItem(tokenKey);
    const body = JSON.stringify(LesLogses);
    const heeaderOptions =  new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + token});
    const requestOptions =  new RequestOptions({method : RequestMethod.Post, headers : heeaderOptions});
    console.log(body);
   return this.http.post(this.LoginUrl, LesLogses, requestOptions).subscribe(x=>console.log(x.text()));
   */
  const body = JSON.stringify(LesLogses);
   return  this.http.post<any>(this.LoginUrl,body)
   .map(user =>{
      if(user && user.token){
        localStorage.setItem('currentUser',JSON.stringify(user));
      }
      return user;
   })

  }

  //Service qui permet la déconnection
  logout(){
    localStorage.removeItem('currentUser');
  }


  


}
