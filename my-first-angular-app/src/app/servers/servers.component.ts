import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers',
  // use  <app-servers></app-servers> in html
  
  // selector: '.app-servers', <-- Selecting by class
  // use <div class="app-servers"></div> in html

  // selector: '[app-servers]', <-- Selecting by attribute
  // use <div app-servers></div> in html
  
  template: `
    <app-unique-html-name></app-unique-html-name>
    <app-unique-html-name></app-unique-html-name>
  `,
  // styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
