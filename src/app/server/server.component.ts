import { Component } from "@angular/core";
import { isEmpty } from "rxjs";

//descorator para informar que é um component
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
 
  })
  
export class ServerComponent{
    serverId = 10;
    serverStatus = 'offline';

    username = "";


    getServerStatus(){
      return this.serverStatus;
    }

    onClickReset(){
      this.username = "";
    }
}