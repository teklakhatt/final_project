import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

 
 watch: string = "";
 talk: string = "";
 drink: string = "";
 does: string = "";
 leave: string = "";
 were: string = "";
 call: string = "";
 read: string = "";
 wake: string = "";
 get: string = "";
 arrive: string = "";
 did: string = "" ;
leave2: string = "";
make: string = "";
point: number = 0;
point2: number = 2;
count:boolean = false;
score:boolean = true;


  constructor() { }

  ngOnInit(): void {
  }
check(){
this.count = true;
this.score = false;
if(this.watch == "watch")
{
  this.point = this.point + 1;
}
 if (this.make == "is making")
{
  this.point = this.point + 1;
}
 if (this.talk == "am talking"){
  this.point = this.point + 1;
}
if (this.drink == "was drinking"){
  this.point = this.point + 1;

}
if (this.does == "does"){
  this.point = this.point + 1;

}
if(this.leave =="leave")
{
  this.point = this.point + 1;
}
if(this.were == "were you drinking"){
  this.point = this.point + 1;
}
if (this.call == "called"){
  this.point = this.point + 1;
}
if (this.read == "will be reading"){
  this.point = this.point + 1;
}
if(this.wake == "wakes up"){
  this.point = this.point + 1;
}
if (this.get == "gets"){
  this.point = this.point + 1;
}
if (this.arrive =="will arrive"){
  this.point = this.point + 1;
}
if (this.did == "did"){
  this.point = this.point + 1;
}
if (this.leave2 == "leave"){
  this.point = this.point + 1;
}








  if(this.watch !== "watch")
  {
   this.watch = "";
  }
   if (this.make !== "is making")
  {
    this.make = ""; 
  }
   if (this.talk !== "am talking"){
 this.talk = "";
  }
  if (this.drink !== "was drinking"){
    this.drink = "";
  
  }
  if (this.does !== "does"){
    this.does = "";
  
  }
  if(this.leave !=="leave")
  {
    this.leave="";
  }
  if(this.were !== "were you drinking"){
    this.were ="";
  }
  if (this.call !== "called"){
    this.call ="";
  }
  if (this.read !== "will be reading"){
this.read ="";
  }
  if(this.wake !== "wakes up"){
this.wake ="";
  }
  if (this.get !== "gets"){
    this.get ="";
  }
  if (this.arrive !=="will arrive"){
    this.arrive ="";
  }
  if (this.did !== "did"){
    this.did="";
  }
  if (this.leave2 !== "leave"){
    this.leave2 = "";
  }


  
  }
}
