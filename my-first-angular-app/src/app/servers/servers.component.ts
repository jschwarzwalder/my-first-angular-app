import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
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
