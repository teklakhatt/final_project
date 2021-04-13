import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  present:boolean = false;
  past: boolean = false;
  future: boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }
  showFuture(){
    this.future = true;
  }
  closeFuture(){
    this.future = false;
  }
showPast()
{
  this.past= true;
}
closePast()
{
  this.past = false;
}
  showPresent()
  {
    this.present = true;
  }
  closePresent()
  {
    this.present = false;
  }
}
