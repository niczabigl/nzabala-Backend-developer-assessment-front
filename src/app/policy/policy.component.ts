import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Policy } from '../model/policy';
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

  isAdmin : boolean;
  isUser : boolean;
  isSuperUser : boolean;

  dataSource : MatTableDataSource<Policy>;
  fullDataSource : MatTableDataSource<Policy>;
  dataSourceFiltered : MatTableDataSource<Policy>;

  columnsToDisplay = ['id', 'inceptionDate', 'clientId'];
  expandedElement: Policy;

  constructor(private policyService : PolicyService, private clientService : ClientService) { }

  ngOnInit() {
    this.isAdmin = false;
    this.isUser = false;
    this.isSuperUser = false;
    this.policyService.getAllPolicies().subscribe(
      (data:any) =>
      {
        this.fullDataSource = new MatTableDataSource(data.context.entity);
      }
    )
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setUser(){
    this.isUser = !this.isUser;
    if(this.isAdmin == true && this.isUser == true){
      this.isSuperUser = true;
      this.dataSource = this.fullDataSource;
    }else{
      this.isSuperUser = false;
      this.dataSource = this.dataSourceFiltered;
    }
  }
  setAdmin(){
    this.isAdmin = !this.isAdmin;
    if(this.isAdmin == true && this.isUser == true){
      this.isSuperUser = true;
      this.dataSource = this.fullDataSource;
    }else{
      this.isSuperUser = false;
      this.dataSource = this.dataSourceFiltered;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.isAdmin.currentValue == true && changes.isUser.currentValue == true){
      this.isSuperUser = true;
      this.dataSource = this.fullDataSource;
    }
  }

  getUserDataFilteredByUserId(id : string){
    this.policyService.getClientByPolicyId(id).subscribe(
    (data:any) => {
      this.dataSourceFiltered = new MatTableDataSource(data.context.entity);
    });
  }

}
