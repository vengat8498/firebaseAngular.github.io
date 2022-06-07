import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string='';
  password: string='';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  register(){
    if(this.email==''){
    alert('please Enter Email');
    return;
  }
  if(this.password==''){
    alert('please Enter Passwword');
    return;
  }
  this.auth.register(this.email,this.password);
  this.email='';
  this.password='';
}


}

