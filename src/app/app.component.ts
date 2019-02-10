import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHideSideBar:boolean = false;//Pour passer cette variable au fils, il faut le remettre au compsant fils avec @Input
  onShowSideBarChange(showHideSideBar){
    console.log('onshow'+showHideSideBar);
    this.showHideSideBar = showHideSideBar;
  }
}
