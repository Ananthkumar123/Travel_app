import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class FormService {
   
  baseurl ="http://localhost:8080";

  postlink ="http://localhost:8080/travel/";
  getlink ="http://localhost:8080/travel/";
  deletelink ="http://localhost:8080/travel";
  updatelink="http://localhost:8080/travel/p/";

  constructor(private _http:HttpClient) { }

  //post
  public adduser(data):Observable<any>{

    return this._http.post(this.postlink,data,{responseType:"text"});
  }

  //get
  public getUser1():Observable<any>{
      
    return this._http.get(this.getlink )
  }
   
  //delete
  public deleteuser(id:any):Observable<any>{

    return this._http.delete(`${this.deletelink}/${id}`, {responseType:'text'});
  }
 //update
  public edituser(id:any, data):Observable<any>{

    return this._http.put(this.updatelink+id,data,{responseType:'text'});
  }

   

   sub()
   {  
    
   }
}
