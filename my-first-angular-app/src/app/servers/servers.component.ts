import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers',
  // use  <app-servers></app-servers> in html
  
  // selector: '.app-servers', <-- Selecting by class
  // use <div class="app-servers"></div> in html

  // selector: '[app-servers]', <-- Selecting by attribute
  // use <div app-servers></div> in html
  
  template: `
  <div class="row">
    
    <div class="col-sm-9">
      <app-server></app-server>
      <app-server></app-server>
    </div>
    <div class="col-sm-3 center">
      <div class="btn-group">
        <button [disabled]="!allowNewServer" type="button" class="btn btn-info btn-lg">Add Server</button>
      </div>
    </div>
  </div>
  `,
  // styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

}