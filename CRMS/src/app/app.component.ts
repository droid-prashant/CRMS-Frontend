import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from 'src/services/token-service.service';
import { UserService } from 'src/services/user.service';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { Admin } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRMS';
  currentUser: any;
  isLoggedIn: boolean = false;
  token: any;
  roles: any;
  loginRequest: Admin = new Admin();
  staffLog: boolean = false;
  

  constructor(private tokenStorage: TokenStorageService, private service: UserService, private router: Router) { }

  ngOnInit(): void {
   
    this.token = this.tokenStorage.getToken();
    if (this.token != null) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
      this.roles = this.currentUser.roles;
      if (this.roles.includes('ROLE_USER')) {
        this.staffLog = true;
      }
      else {
        this.staffLog = false;
      }

     
    } else {
      this.isLoggedIn = false;
    }

  
        
  }

  logout(){
      this.tokenStorage.signOut();
      //this.router.navigate(['/admin-login']);
      window.location.replace('/admin-login');


    }
}


