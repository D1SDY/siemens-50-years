import { Component, OnInit } from '@angular/core';

declare function eventListner():any;
declare function temp():any;

@Component({
  selector: 'app-siemens-internet',
  templateUrl: './siemens-internet.component.html',
  styleUrls: ['./siemens-internet.component.scss']
})
export class SiemensInternetComponent implements OnInit{
  

  constructor() { }

  ngOnInit():void{
    eventListner();
  }

}
