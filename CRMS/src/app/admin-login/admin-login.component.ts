import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/services/token-service.service';
import { UserService } from 'src/services/user.service';
import { Admin } from '../user';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  msg = "";
  roles:any[]=[];

  loginRequest: Admin = new Admin();
  constructor(private service: UserService, private router: Router, private tokenStorage: TokenStorageService,) { }

  ngOnInit(): void {

   

  }
  onSubmit(): void {
    this.service.doLogin(this.loginRequest).subscribe(
      data => {

        this.roles= data.roles;
        // console.log(data);
        if(this.roles.includes('ROLE_ADMIN')){
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        console.log("response recieved",);
        window.location.replace('/admin-dashboard');
        }else{
         alert("you are not authorized user");
        }
       // window.location.reload();
   
      }, err => {
        console.log("exception occured", err)
        this.msg = "Please enter valid username and password."

      }
    );
  }
}

