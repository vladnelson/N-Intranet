import { Injectable } from '@angular/core';

@Injectable()
export class AuthenficationService {

  private AuthentificationUrl= 'http://192.168.0.11/Service1.svc?wsdl';
  constructor() { }

}
