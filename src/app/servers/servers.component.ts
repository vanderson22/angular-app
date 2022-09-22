import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html', // todo componente precisa de um template.
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  serverId = 10;
  serverStatus = 'offline';
  serverName = 'default serverName';
  allowNewServer = false;
  serverCreationStatus = 'Server was not created';


  //propertie bind disable = true
  // após o contrutor, ao se passar 2 segundos os botão habilita.
 constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
 }
  
 onCreateServer(){
   this.serverCreationStatus = 'Server was created sucessfully >> ' + this.serverName;
 }
  getServerStatus(){
    return this.serverStatus;
  }
  ngOnInit(): void {
  }

}
