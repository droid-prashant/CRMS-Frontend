import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { User } from '../user';
@Component({
  selector: 'app-register-complaint',
  templateUrl: './register-complaint.component.html',
  styleUrls: ['./register-complaint.component.css']
})
export class RegisterComplaintComponent implements OnInit {
  message: any;
  publicRegistration: User = new User()
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  public registerNow() {
    this.service.doRegistration(this.publicRegistration).subscribe(
      res => {
        console.log(res);
        alert("Successfully registered");
        // this.successMessage();
      },
      err => {
        console.log(err);
      }
    );
  }
  // successMessage(){
  //   this.toastrService.success("Complaint Registered Successfully!","Success");
  // }
}
