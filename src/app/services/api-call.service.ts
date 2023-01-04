import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyUsers } from 'src/model/MyUsers';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  baseUrl:string='http://localhost:3000/users'
 
  constructor(private callApi:HttpClient) { }

getAllUsers():Observable<MyUsers>{
 return this.callApi.get(this.baseUrl)
}

viewContact(contactId:number){
  return this.callApi.get(`${this.baseUrl}/${contactId}`)
 }

}
