import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nzabala-Backend-developer-assessment-front';
  goHome():void{
    window.location.pathname="menu";
  }
  constructor () {
    
  }

  ngOnInit() {
    this.isUserLogin()
  }

  isUserLogin() {
    let cookies = document.cookie.split(';')
    cookies.forEach( (c)=> {
      console.log('cookie', c)
    }) 
  }
}
