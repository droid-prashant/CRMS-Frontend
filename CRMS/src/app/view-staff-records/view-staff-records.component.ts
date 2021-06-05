import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-view-staff-records',
  templateUrl: './view-staff-records.component.html',
  styleUrls: ['./view-staff-records.component.css']
})
export class ViewStaffRecordsComponent implements OnInit {
  getStaff: any;

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.staffView();
  }
  staffView(){
    this.service.viewStaff().subscribe(
      res=>{
        this.getStaff=res;
        console.log(res);
       
      },
      err=>{
        console.log(err);
      }
    );
  }

}
