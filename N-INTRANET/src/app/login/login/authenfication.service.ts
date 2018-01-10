import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginViewModel } from '../../ViewModel/login-view-model';
import { tap, catchError } from 'rxjs/operators';
import { Utilisateur } from '../../Model/utilisateur';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthenficationService {

  private LoginUrl= 'api/Account/login';
  // private LoginUrl =  'api/Account/login';

  private httpOptions= {
    headers: new  HttpHeaders ({'Content-type' : 'application/json'}),
    
  };


  constructor(private http: HttpClient) {
    
   }

  Login(LesLogs: LoginViewModel) {
    console.log('On est dans le service web');
    return this.http.post(this.LoginUrl, LesLogs, this.httpOptions).pipe(
      tap((value: Utilisateur) => console.log('Vous avez reussit a envoyer les informations' + value.Id,
    catchError(this.handleError('..........'))))
    );
  }



  private handleError<T>(operation = 'operation', data?: Utilisateur) {
    console.log(operation);
    return (error: any): Observable<Utilisateur> => {
      console.error(error);
      if (error.status === 404) {
        console.error('Produit introuvable');
      }
      return Observable.of(data as Utilisateur);
    };
  }
}
