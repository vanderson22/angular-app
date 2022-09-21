import { Component } from "@angular/core";

//descorator para informar que é um component
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
 
  })
  
export class ServerComponent{
    serverId = 10;
    serverStatus = 'offline'

    getServerStatus(){
      return this.serverStatus;
    }
}