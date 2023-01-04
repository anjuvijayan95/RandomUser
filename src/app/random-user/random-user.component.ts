import { Component,OnInit} from '@angular/core';
import { MyUsers } from 'src/model/MyUsers';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit{
  allUser:MyUsers []=[]
  symbol:string=''
  color:string=''
  unique:[]=[]
  idArray:any
  toString:string=''
  content:any


  constructor(private store:ApiCallService){}


  ngOnInit():void{
    this.store.getAllUsers().
    subscribe((data:any)=>{
      this.content=data[Math.floor(Math.random()*data.length)]
      console.log(this.content);
      
    // this.unique=data.map((d:any)=>d.id)
    //  console.log(this.unique);

     // to get random users

    // var randomId=Math.floor(Math.random()*this.unique.length)
    // this.toString+=randomId
    // this.idArray=Array.from(this.toString)
    
    
    
    })


// to get random colors
    this.symbol="0123456789ABCDEF"
    this.color='#'
    for(var i=0;i<6;i++){
      this.color=this.color+this.symbol[Math.floor(Math.random()*16)]
    }
  }
  // randomColors(){
  // this.symbol="0123456789ABCDEF"
  // this.color='#'
  // for(var i=0;i<6;i++){
  //   this.color=this.color+this.symbol[Math.floor(Math.random()*16)]
  // }
  // }


}

