import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';

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

  columnsToDisplay = ['name', 'email'];
  expandedElement: Client;

  constructor(private clientService : ClientService) { }

  ngOnInit() {
    this.isAdmin = false;
    this.isUser = false;
    // this.clientService.getAllClients().subscribe(
    //   (data:any) =>
    //   {
    //     this.fullDataSource = new MatTableDataSource(data.context.entity);
    //   }
    // )
  }

  applyFilter(filterValue: string) {
    //this.dataSource.filter = filterValue.trim().toLowerCase();
    this.getUserDataFilteredByUserId(filterValue);
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
      this.dataSourceFiltered = new MatTableDataSource(data.context.entity);
    });
  }
//   Get user data filtered by user id -> Can be accessed by users with role "users"
// and "admin"
// • Get user data filtered by user name -> Can be accessed by users with role
// "users" and "admin"

}