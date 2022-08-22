import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngBi';
  resp : any
  resp2 : any
  resp3 : any
  total : any=0
  counts : number=0
  is_selected : Array<any | string> = []
  
  constructor(private httpr:HttpClient){}
  ngOnInit(): void {
    
    this.resp=this.httpr.get("http://localhost:3000/NEA").subscribe(res => this.resp=res)
    this.resp2=this.httpr.get("http://localhost:3000/Country_Usage").subscribe(res => this.resp2=res)
    this.resp3=this.httpr.get("http://localhost:3000/Provinces").subscribe(res => this.resp3=res)
  }
  getSumOfCube():number
  {
    this.counts=this.counts+1
    for(let i =0;i<this.resp2.length;i++)
    {
      this.total = this.total+this.resp2[i].cubes
    }
    
    return Math.floor(this.total/this.counts)
  }
  

}
