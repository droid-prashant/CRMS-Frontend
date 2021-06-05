import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/services/token-service.service';
import { UserService } from 'src/services/user.service';
import { Admin } from '../user';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {
loginRequest:Admin=new Admin();
roles:any[]=[];
isVerified:Boolean = true;
otp:any;


  constructor(private service:UserService, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }
onSubmit(){
  this.service.doLogin(this.loginRequest).subscribe(
    res=>{
      this.roles=res.roles;
      console.log(res);
      if(res.message=="Check your email you neeed to verify it"){
            this.isVerified = false;
      }else{
        this.isVerified= true;
        if(this.roles.includes('ROLE_USER')){
          this.tokenStorage.saveToken(res.token);
          this.tokenStorage.saveUser(res);
          console.log('response received');
          window.location.replace('/assigned-complaint')
          }
          else{
            alert("you are not authorized user");
          }
      }

     
    },
    err=>{
      console.log(err);
    }
  );
}

OtpValidator(){
  this.service.OtpValidator(this.otp, this.loginRequest.username).subscribe(
    res =>{
      console.log(res);
      this.isVerified = true;
      
    },
     err =>{
       console.log(err);
     }
  );
}

}
