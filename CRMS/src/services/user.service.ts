import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { staffEntry, staffReg, User } from 'src/app/user';
import {Admin} from 'src/app/user';


@Injectable({
  providedIn: 'root'
})
export class UserService { 
  constructor(private http: HttpClient) { }
  public doRegistration(publicRegistration: User):Observable<any>{
   return this.http.post("http://localhost:8080/api/public/create", publicRegistration, {responseType: "text" as "json"});
  }
  public doLogin(loginRequest:Admin):Observable<any>{
    return this.http.post("http://localhost:8080/api/auth/signin", loginRequest)
  }

  public staffRecordEntry(username:any,policeStaffRegistration:any):Observable<any>{
    return this.http.post("http://localhost:8080/api/police/create/"+username ,policeStaffRegistration, {responseType:'json'});
  }
  public staffAccount(signupRequest:staffReg){
    return this.http.post("http://localhost:8080/api/auth/signup",signupRequest,{responseType:'json'});
  }

  public OtpValidator(otp:number, username:any):Observable<any>{
    return this.http.post("http://localhost:8080/api/email/emailVerification/"+username+"/?otpnum="+otp, {responseType:'json'});
  }
  addPhoto(username:any,file:FormData){
    
    return this.http.post("http://localhost:8080/api/policeStaffPicture/uploadPicture/"+username, file,{
      reportProgress: true,
      observe: 'events'
    });
  }
  public viewStaff():Observable<any>{
    return this.http.get("http://localhost:8080/api/police/list",{responseType:'json'});
  }
  public viewOneStaff(obj_id:any):Observable<any>{
    return this.http.get("http://localhost:8080/api/police/listByUserId/"+obj_id,{responseType:'json'});
  }
  public addEvidence(username:any, file:FormData):Observable<any>{
    return this.http.post("http://localhost:8080/api/evidence-record/uploadFile/"+username,file,{responseType:'json'});
  }
  public downloadFile(fileName:any):Observable<any>{
    return this.http.get("http://localhost:8080/api/evidence-record/downloadFile/"+fileName,{responseType:'json'});
  }
  public getAllFile():Observable<any>{
    return this.http.get("http://localhost:8080/api/evidence-record/getAll",{responseType: 'json'});
  }
}
