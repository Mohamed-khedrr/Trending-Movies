import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import jwtDecode from "jwt-decode";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('uesrToken') != null){
    this.setUserData()
    console.log('x')
    }

  }


  userData = new BehaviorSubject(null) ;



register(data:object){
  return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',data)
}

login(data:object){
  return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',data)
}


setUserData(){
  let token =JSON.stringify( localStorage.getItem('uesrToken'));
  this.userData.next( jwtDecode(token))
}





}



