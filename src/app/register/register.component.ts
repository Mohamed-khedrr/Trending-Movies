import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService ,private _Router:Router ) {}

  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null ,[Validators.required ,Validators.minLength(2) ,Validators.maxLength(8)] ),
    last_name:new FormControl(null ,[Validators.required , Validators.minLength(2) , Validators.maxLength(8)]),
    age:new FormControl(null ,[Validators.required ,Validators.min(18) ,Validators.max(80)]),
    email:new FormControl(null ,[Validators.email , Validators.required]),
    password:new FormControl(null ,[Validators.required])
  })

  isTaken:boolean = false ;

  ngOnInit(): void {
  }

  registeration(data:FormGroup){
    this._AuthService.register(data.value).subscribe(
      (response:any)=>{
        if(response.message == 'success' ){
          this._Router.navigate(["login"])
        }else{
          this.isTaken = true ;
        }
      }
      )
  }


}
