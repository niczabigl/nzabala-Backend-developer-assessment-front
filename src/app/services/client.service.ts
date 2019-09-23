import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, private AppConfig : AppConfig) { 
  }

  public getAllClients(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'instanceId': 'instanceone'
      })
    }
    return this.http.get(AppConfig.API_ENDPOINT+'clients', httpOptions)
  }

  public getDataFilteredByUserId(id : string){
    return this.http.get(AppConfig.API_ENDPOINT+'clients/'+id, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'instanceId': 'instanceone'
      })
    })
  }
}
