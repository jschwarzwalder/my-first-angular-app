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

  serverID: number = 10001;a
  serverStatus: string = 'active';

  getServerStatus() {
    return this.serverStatus;
  }
}
