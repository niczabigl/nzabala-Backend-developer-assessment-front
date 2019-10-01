import { Component, OnInit, SimpleChanges, Output } from '@angular/core';
import { Client } from '../../model/client';
import { ClientService } from '../../services/client.service';
import { PubSubService } from '../../services/pubsub.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';
import { NotificacionType } from '../../model/notification'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ClientComponent implements OnInit {

  isAdmin : boolean;
  isUser : boolean;

  dataSource : MatTableDataSource<Client>;
  fullDataSource : MatTableDataSource<Client>;
  dataSourceFiltered : MatTableDataSource<Client>;

  columnsToDisplay = ['cliname', 'cliemail', 'clirole'];
  expandedElement: Client;

  filter : string;
  constructor(private pubsub : PubSubService, private clientService : ClientService) { }

  ngOnInit() {
    this.isAdmin = false;
    this.isUser = false;
    this.clientService.getAllClients().subscribe(
      (data:any) =>
      {
        console.log('DATA', data)
        this.fullDataSource = new MatTableDataSource(data);
        console.log('fullDataSource', this.fullDataSource)
      }
    )
  }

  applyFilter() {
    this.filter = this.filter ? this.filter.trim().toLowerCase() : '';
    this.getUserDataFilteredByUserId(this.filter);
  }

  setUser(){
    this.isUser = !this.isUser;
    if(this.isAdmin == true && this.isUser == true){
      this.dataSource = this.fullDataSource;
    }else{
      this.dataSource = this.dataSourceFiltered;
    }
  }
  setAdmin(){
    this.isAdmin = !this.isAdmin;
    if(this.isAdmin == true && this.isUser == true){
      this.dataSource = this.fullDataSource;
    }else{
      this.dataSource = this.dataSourceFiltered;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.isAdmin.currentValue == true && changes.isUser.currentValue == true){
      this.dataSource = this.fullDataSource;
    }
  }

  getUserDataFilteredByUserId(id : string){
    this.clientService.getDataFilteredByUserId(id).subscribe(
    (data:any) => {
      if (!data || data.length === 0 ) {
        //this.notification = new Notificacion('No items found', NotificacionType.ERROR);
        this.pubsub.emit('showSnackbar', 'No items found', NotificacionType.ERROR)
      } else {
        this.dataSource = new MatTableDataSource(data);
        //this.notification = new Notificacion(`Items found ${data.entity.length}`, NotificacionType.INFO);
        this.pubsub.emit('showSnackbar', `Items found ${data.length}`, NotificacionType.SUCCESS)
      }
    })
  }
}