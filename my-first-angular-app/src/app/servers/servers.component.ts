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
        <button [disabled]="!allowNewServer" 
        type="button" class="btn btn-info btn-lg"
        (click)="onCreateServer()">Add Server</button>
        </div>
        <!-- <p [innerText]="allowNewServer"></p> -->
        <p [innerText]="serverCreationStatus"></p>
        
    </div>
  </div>
  `,
  // styleUrls: ['./servers.component.css']
  styles: [`
    p {
      color: white;
    }
  `]
  
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
  }



}