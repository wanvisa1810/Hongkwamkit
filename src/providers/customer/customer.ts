import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomerProvider {
  data: any;
  constructor(public http: HttpClient) {
    //console.log('Hello CustomerProvider Provider');
    this.data = [
      { id:"1", name:"Wanvisa", tel:"0838984809", address:"70/1 moo.4 meangtii, meang , Surin" },
      { id:"2", name:"Suparak", tel:"0838984808" , address:"70/1 moo.4 meangtii, meang , Surin" },
      { id:"3", name:"Chaiyawut", tel:"0838984807" , address:"70/1 moo.4 meangtii, meang, Surin" }
    ];
  }
  loadAll(){
    return Promise.resolve(this.data);
  }

  getCustomerById(id){
    for(var i=0;1<(this.data).length;i++){
      if(this.data[i].id==id){
        return Promise.resolve(this.data[i]);
      }
    }
  }

}
