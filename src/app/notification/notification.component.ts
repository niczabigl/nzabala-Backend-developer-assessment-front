import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition  } from '@angular/material';
import { Notificacion, NotificacionType } from '../model/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  @Input()
  notification : Notificacion;

  showNotification(message : string, type:string){
    if((message != undefined || message != null) && message.length>0){
      let backGroundColor = this.getTypeNotification(type);
      setTimeout(() => this.snackBar.open(message,"",{
        duration: 1500, 
        horizontalPosition : this.horizontalPosition,
        verticalPosition : this.verticalPosition,
        panelClass: [backGroundColor]
      }));
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.showNotification(changes.notification.currentValue, this.notification.getType());
  }

  getTypeNotification(type:string): string{
    switch(type){
      case 'success':
        return 'green-snackbar';
      case 'error':
        return 'red-snackbar';
      case 'alert':
        return 'yellow-snackbar';
      case 'info':
        return 'blue-snackbar';
    }
  }
}

@Component({
  selector: 'snack-notification',
  templateUrl: './snack-notification.html',
  styleUrls: ['./notification.component.css']
})
export class SnackComponent{

}