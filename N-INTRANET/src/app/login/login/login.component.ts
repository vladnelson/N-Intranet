import { Component, OnInit } from '@angular/core';
import { AuthenficationService } from './authenfication.service';
import { LoginViewModel } from '../../ViewModel/login-view-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Leslogs: LoginViewModel;
  constructor(private service: AuthenficationService) {

   }

  ngOnInit() {
  }
Login() {
alert('C bon ');
    this.service.Login(this.Leslogs).subscribe();
  
   }
}
