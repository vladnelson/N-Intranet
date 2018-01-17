import { Component, OnInit } from '@angular/core';
import { AuthenficationService } from '../../_services/authenfication.service';
import { LoginViewModel } from '../../_viewModels/login-view-model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  private Logins: LoginViewModel ;
  constructor(private service: AuthenficationService) {


   }

  ngOnInit() {
    this.service.logout();
  }


  Login(email: string,password:string) {

    this.Logins= new LoginViewModel(email,password);
     alert('C bon ');
    this.service.Login(this.Logins).subscribe(
      data =>{
        console.log("bien");
      },
      error =>{
        console.log("pas bien ");
      }

    );
    
   }
}
