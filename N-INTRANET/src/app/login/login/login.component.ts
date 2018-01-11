import { Component, OnInit } from '@angular/core';
import { AuthenficationService } from './authenfication.service';
import { LoginViewModel } from '../../ViewModel/login-view-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  private a: LoginViewModel = new LoginViewModel('didimilca@live.com', 'Pas$w0rd') ;
  constructor(private service: AuthenficationService) {

   }

  ngOnInit() {
  }


  Login() {
     alert('C bon ');
    this.service.Login(this.a);
   }
}
