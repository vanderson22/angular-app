import { Component } from "@angular/core";
import { isEmpty } from "rxjs";

//descorator para informar que é um component
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls : ['./server.component.css']

})
  
export class ServerComponent{
    serverId = 10;
    serverStatus = 'offline';
    btnparagraph =false;
    username = "";

    clicks= [];

    getServerStatus(){
      return this.serverStatus;
    }

    onclickButton(){
       this.clicks.push((this.clicks.length - 1) +1) ; // (this.clicks.length - 1) +1;
       
      if(this.btnparagraph){
            this.btnparagraph = false;
      }else {
        this.btnparagraph = true;
      }
    
    }
    
       getColor(position : any){
        return position > 4 ? "blue" : "white";
       }

}