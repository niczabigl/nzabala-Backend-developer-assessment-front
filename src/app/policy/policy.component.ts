import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Policy } from '../model/policy';
import { Client } from '../model/client';
import { Userpolicies } from '../model/dto/userpolicies';
import { PolicyService } from '../services/policy.service';
import { ClientService } from '../services/client.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PolicyComponent implements OnInit {

  isPolicy : boolean;
  isAdmin : boolean;
  isUser : boolean;
  isSuperUser : boolean;
  filter : string;
  dataSource : any;
  fullDataSource : MatTableDataSource<Policy>;
  dataSourceFiltered : MatTableDataSource<Policy>;

  columnsToDisplay : Array<string>;
  expandedElement: any;

  constructor(private policyService : PolicyService) { }

  ngOnInit() {
    this.isPolicy = true;
    this.isAdmin = false;
    this.isUser = false;
    this.isSuperUser = false;
    this.policyService.getAllPolicies().subscribe(
      (data:any) =>
      {
        this.fullDataSource = new MatTableDataSource(data);
      }
    )
  }

  applyFiltergetUserDataFilteredByPolicyId() {
    this.filter ? this.getUserDataFilteredByPolicyId(this.filter) : false;
  }

  applyFiltergetUserPoliciesByUserName() {
    this.filter ? this.getUserPoliciesByUserName(this.filter) : false;
  }

  setUser(){
    this.isUser = !this.isUser;
    if(this.isAdmin == true && this.isUser == true){
      this.isSuperUser = true;
    }else{
      this.isSuperUser = false;
    }
  }
  setAdmin(){
    this.isAdmin = !this.isAdmin;
    if(this.isAdmin == true && this.isUser == true){
      this.isSuperUser = true;
    }else{
      this.isSuperUser = false;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.isAdmin.currentValue == true && changes.isUser.currentValue == true){
      this.isSuperUser = true;
    }
  }

  getUserDataFilteredByPolicyId(id : string){
    this.policyService.getClientByPolicyId(id).subscribe(
    (data:any) => {
      console.log(data)
      this.dataSource = new MatTableDataSource<Client>(data);
      console.log(JSON.stringify(this.dataSource.filteredData));
      this.expandedElement = Client;
      this.isPolicy = false;
      this.columnsToDisplay = ['cliname', 'cliemail'];
    });
  }

  getUserPoliciesByUserName(username : string){
    this.policyService.getUserPoliciesByUserName(username).subscribe(
    (data:any) => {
      this.dataSource = new MatTableDataSource<Userpolicies>(data);
      console.log(JSON.stringify(this.dataSource.filteredData));
      this.expandedElement = Policy;
      this.isPolicy = true;
      this.columnsToDisplay = [ 'userId', 'userName'];
    });
  }

}
