import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers',
  // use  <app-servers></app-servers> in html
  
  // selector: '.app-servers', <-- Selecting by class
  // use <div class="app-servers"></div> in html

  // selector: '[app-servers]', <-- Selecting by attribute
  // use <div app-servers></div> in html
  
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  // styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}