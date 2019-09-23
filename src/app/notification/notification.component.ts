import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition  } from '@angular/material';
import { NotificacionType } from '../model/notification';
import { PubSubService } from '../services/pubsub.service'

@Component({
  selector: 'app-notifications',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private pubsub : PubSubService, private snackBar: MatSnackBar) { 
    this.pubsub.on('showSnackbar', this.showNotification.bind(this))
  }

  ngOnInit() {
  }

  showNotification(message : string, type:string){
    if((message != undefined || message != null) && message.length > 0){
      let backGroundColor = this.getTypeNotification(type);
      this.snackBar.open(message, "Close", {
        duration: 3000, 
        horizontalPosition : this.horizontalPosition,
        verticalPosition : this.verticalPosition,
        panelClass: [backGroundColor]
      });
    }
  }

  getTypeNotification(type:string): string{
    switch(type){
      case NotificacionType.SUCCESS:
        return 'green-snackbar';
      case NotificacionType.ERROR:
        return 'red-snackbar';
      case NotificacionType.WARNING:
        return 'yellow-snackbar';
      case NotificacionType.INFO:
        return 'blue-snackbar';
    }
  }
}
