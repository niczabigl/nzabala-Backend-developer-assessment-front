import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PubSubService {

  events : any = {};
  constructor() { 
  }

  public on (name : string, cb : Function) {
    console.log('registry', name)
    this.events[name] = (this.events[name] || []).concat(cb)
  }

  public emit (name, ...args) {
    console.log('triggered', name)
    return Promise.all(
      this.events[name]
        .map((fnc) => Promise.resolve(fnc.apply(this, args)))
    )
  }

  remove (name) {
    this.events[name] = undefined
  }
  removeAll () {
    this.events = {}
  }
}
