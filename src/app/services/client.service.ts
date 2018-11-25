import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, private AppConfig : AppConfig) { 
  }

  public getAllClients(){
    return this.http.get(AppConfig.API_ENDPOINT+'clients');
  }

  public getDataFilteredByUserId(id : string){
    return this.http.get(AppConfig.API_ENDPOINT+'clients/'+id);
  }
}
