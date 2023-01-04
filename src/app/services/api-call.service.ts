import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { MyUsers } from 'src/model/MyUsers';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  baseUrl:string='https://dummyjson.com/users'
 
  constructor(private callApi:HttpClient) { }

getAllUsers(){
 return this.callApi.get(this.baseUrl)
}

// viewContact(contactId:number){
//   return this.callApi.get(`${this.baseUrl}/${contactId}`)
//  }

}
