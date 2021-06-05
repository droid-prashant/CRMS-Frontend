import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseDetailService {

  constructor(private http:HttpClient) { }
  addCaseEntry(caseDetails:any, id:any):Observable<any>{
   return this.http.post("http://localhost:8080/api/caseDetails/create/"+id, caseDetails,{responseType:'json'});
  }
  getCaseEntry(acId:any):Observable<any>{
    return this.http.get("http://localhost:8080/api/caseDetails/listByAcId/"+acId,{responseType:'json'});
  }
}
