import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { staffReg } from '../user';

@Component({
  selector: 'app-staff-account',
  templateUrl: './staff-account.component.html',
  styleUrls: ['./staff-account.component.css']
})
export class StaffAccountComponent implements OnInit {
  signupRequest:staffReg=new staffReg();
  staffRegistery:any

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
  public regStaff(){
    this.service.staffAccount(this.signupRequest).subscribe(
      res=>{
        console.log(res);
        this.staffRegistery=res;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
