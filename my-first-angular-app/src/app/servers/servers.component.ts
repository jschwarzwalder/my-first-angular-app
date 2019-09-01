import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers',
  // use  <app-servers></app-servers> in html

  // selector: '.app-servers', <-- Selecting by class
  // use <div class="app-servers"></div> in html

  // selector: '[app-servers]', <-- Selecting by attribute
  // use <div app-servers></div> in html

  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [`
    p, label {
      color: white;
    }
  `]

})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Enter Server Name';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    //console.log(event);
    this.serverName =(<HTMLInputElement>event.target).value;
  }

}