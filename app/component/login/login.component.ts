import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string='';
  password: string='';

  constructor(private auth:AuthService) { }

  ngOnInit(): void {}
  
  login(){
    if(this.email==''){
    alert('please Enter Email');
    return;
  }
  if(this.password==''){
    alert('please Enter Passwword');
    return;
  }
  this.auth.login(this.email,this.password);
  this.email='';
  this.password='';
}

}