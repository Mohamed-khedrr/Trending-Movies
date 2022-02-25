import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor( private _AuthService:AuthService , private _Router:Router) { }

  isLogged = false ;

  ngOnInit(): void {
    this._AuthService.userData.subscribe(()=>{
      if(this._AuthService.userData.getValue() != null){
        this.isLogged = true ;
      }else{
        this.isLogged = false;
      }
    })
  }





  loggingOut(){
    this.isLogged = false;
    localStorage.removeItem('uesrToken')
    this._AuthService.userData.next(null) ;
    this._Router.navigate(['login'])
  }


}
