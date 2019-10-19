import { Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  p {
    color: lightseagreen;
  }
`]
})
export class ServerComponent {

  serverID: number = 10001;
  serverStatus: string = 'active';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
