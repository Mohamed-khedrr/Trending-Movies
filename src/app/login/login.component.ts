import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }
  isWrong:boolean = false ;
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required])
  })
  userToken:any = null ;

  ngOnInit(): void {
    this.userToken =localStorage.getItem('uesrToken')
    // if(this.userToken != null){
    //   this._AuthService.setUserData(this.userToken)
    //   this._Router.navigate(['home']);
    // }
  }



  login(data:FormGroup){
    this._AuthService.login(data.value).subscribe((response:any)=>{
      if(response.message == 'success'){
      localStorage.setItem('uesrToken',response.token);
      this._AuthService.setUserData()
      this._Router.navigate(['home']);

      }else{
        this.isWrong = true
        setTimeout(()=>{this.isWrong = false ;
        },10000)
      }
    })
  }





}
