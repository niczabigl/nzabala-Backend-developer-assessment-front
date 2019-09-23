import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient, private AppConfig : AppConfig) { 
  }

  public getAllPolicies(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'instanceId': 'instanceone'
      })
    }
    return this.http.get(AppConfig.API_ENDPOINT+'policies', httpOptions);
  }

  public getUserPoliciesByUserName(userName : string){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'instanceId': 'instanceone'
      })
    }
    return this.http.get(AppConfig.API_ENDPOINT+'policies/username/'+userName, httpOptions);
  }

  public getClientByPolicyId(id : string){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'instanceId': 'instanceone'
      })
    }
    return this.http.get(AppConfig.API_ENDPOINT+'policies/policy/'+id, httpOptions);
  }
}
