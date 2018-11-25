import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient, private AppConfig : AppConfig) { 
  }

  public getAllPolicies(){
    return this.http.get(AppConfig.API_ENDPOINT+'policies');
  }

  public getUserPoliciesByUserName(userName : string){
    return this.http.get(AppConfig.API_ENDPOINT+'policy/'+userName);
  }

  public getClientByPolicyId(id : string){
    return this.http.get(AppConfig.API_ENDPOINT+'policy/'+id);
  }
}
