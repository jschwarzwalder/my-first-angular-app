import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers',

  templateUrl: './servers.component.html',
  styles: [`
    p, label {
      color: white;
    }
  `]

})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Enter a Server Name';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created!';
    this.serverCreated = true;
  }

}