import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fireauth: AngularFireAuth, private router:Router) { }
  //login
  login(email : string, password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','ture');
      this.router.navigate(['dashboard']); 
    },err=>{
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }
  //reg
  register(email:string, password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Register Successfull');
      this.router.navigate(['/register']);
    })
  }
  //sign out
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);},err=>{
        alert(err.message);
      })
  }
}
