import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nzabala-Backend-developer-assessment-front';
  goHome():void{
    window.location.pathname="menu";
  }
}
