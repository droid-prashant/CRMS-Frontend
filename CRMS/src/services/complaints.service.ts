import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recruitment } from 'src/app/_helper/recruitment';
import { CriminalEntry } from 'src/app/_helper/_criminalEntry';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  constructor(private http: HttpClient) { }

  getUnAssignedComplaints():Observable<any>{
    return this.http.get("http://localhost:8080/api/public/list",{responseType:'json'});
  }
  getUnAssignedById(publicId:any):Observable<any>{
    return this.http.get("http://localhost:8080/api/public/list/"+publicId,{responseType:'json'});
  }

  postAssignedComplaints(assignComplaint:number, varId:number):Observable<any>{
    return this.http.post("http://localhost:8080/api/assigned_Complaints/create/"+varId+"/"+assignComplaint,{responseType:'json'});
  }
   getAssignedComplaints(pregId:any):Observable<any>{
    return this.http.get("http://localhost:8080/api/assigned_Complaints/listComplaintsByPregId/"+pregId,{responseType:'json'});
  } 
  getAllAssigned():Observable<any>{
    return this.http.get("http://localhost:8080/api/assigned_Complaints/list",{responseType:'json'});
  }
  getOne(id:any):Observable<any>{
   return this.http.get("http://localhost:8080/api/assigned_Complaints/list/"+id,{responseType:'json'});
  }
  getByRank(rank:any){
    return this.http.get("http://localhost:8080/api/police/listByRank/"+rank,{responseType:'json'})
  }
  postCompletedComplaints(finishedComplaint:any,assId:any):Observable<any>{
    return this.http.post("http://localhost:8080/api/finished_complaints/create/"+assId+'/'+finishedComplaint,{resposeType:'json'});
  }
  getAllCriminal():Observable<any>{
    return this.http.get("http://localhost:8080/api/criminalRecord/List",{responseType:'json'});
  }
  postCrminalRecord(criminalRecord:CriminalEntry):Observable<any>{
    return this.http.post("http://localhost:8080/api/criminalRecord/create",criminalRecord,{responseType:'json'});
  }
  getCriminalById(id:number):Observable<any>{
    return this.http.get("http://localhost:8080/api/criminalRecord/list/"+id,{responseType:'json'});
  }
  listFinishedComplaints():Observable<any>{
    return this.http.get("http://localhost:8080/api/finished_complaints/list",{responseType:'json'});
  }
}
