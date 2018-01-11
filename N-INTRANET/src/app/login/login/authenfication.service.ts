import { Injectable } from '@angular/core';
import { LoginViewModel } from '../../ViewModel/login-view-model';
import { Utilisateur } from '../../Model/utilisateur';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http, RequestOptions, Headers, RequestMethod} from '@angular/http';


@Injectable()
export class AuthenficationService {
  SelectedLogin: LoginViewModel;
  private LoginUrl= 'http://localhost:57304/api/Account/login';
  // private LoginUrl =  'api/Account/login';


  constructor(private http: Http) {
   }

  Login(LesLogses: LoginViewModel) {
    console.log('J ai utiliser le web api ');
    const body = JSON.stringify(LesLogses);
    const heeaderOptions =  new Headers({'Content-Type': 'application/json'});
    const requestOptions =  new RequestOptions({method : RequestMethod.Post, headers : heeaderOptions});
    return this.http.post(this.LoginUrl, body, requestOptions).map(x => x.json());
  }






}
