import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { NotificacionType } from '../../model/notification';
import { PubSubService } from '../../services/pubsub.service'
import { Policy } from '../../model/policy';
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
    this.pubsub.on('showLoading', this.showLoading.bind(this))
    this.pubsub.on('hideLoading', this.hideLoading.bind(this))
  }

  ngOnInit() {
  }

  showNotification (message : string, type:string ){
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
  showLoading () {

  }

  hideLoading () {

  }

  getTypeNotification(type:string): string{
    switch(type){
      case NotificacionType.SUCCESS:
        return 'success-snackbar';
      case NotificacionType.ERROR:
        return 'error-snackbar';
      case NotificacionType.WARNING:
        return 'warning-snackbar';
      case NotificacionType.INFO:
        return 'info-snackbar';
    }
  }
}
