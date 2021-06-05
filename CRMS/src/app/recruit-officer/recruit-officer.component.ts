import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from 'src/services/complaints.service';
import { recruitment } from '../_helper/recruitment';

@Component({
  selector: 'app-recruit-officer',
  templateUrl: './recruit-officer.component.html',
  styleUrls: ['./recruit-officer.component.css']
})
export class RecruitOfficerComponent implements OnInit {

assignComplaint:recruitment=new recruitment();
  constructor(private assignedComplaints:ComplaintsService) { }

  ngOnInit(): void {
  }
/* public recruitNow(){
this.assignedComplaints.postAssignedComplaints(this.assignComplaint).subscribe(
  res=>{
    console.log(res);
  },
  err=>{
    console.log(err);
  }
);
} */
}
