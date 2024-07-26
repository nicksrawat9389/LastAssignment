import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    component:boolean=false;

    componentRender(){
      if(this.component){
        this.component = false;
      }
    }
    componentRenderSecond(){
      if(this.component==false){
        this.component=true;
      }
    }

    
}
