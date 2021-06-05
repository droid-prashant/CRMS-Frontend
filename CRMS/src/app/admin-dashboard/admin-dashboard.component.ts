import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from 'src/services/complaints.service';
import { AssignedComplaintsComponent } from '../assigned-complaints/assigned-complaints.component';
import { recruitment } from '../_helper/recruitment';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  selectedDesignation:any;
  selectedOfficer:any;
unAssignedComplaints: any;
assignComplaint:any;
nameOfOfficer:any;
varId:any;
officer:any;
  constructor(private complaintService:ComplaintsService, private assignedComplaints:ComplaintsService){ }

  ngOnInit(): void {
    this.complaintService.getUnAssignedComplaints().subscribe(
      res=>{
        this.unAssignedComplaints=res;
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }
  fetchId(publicId:number){
    this.varId=publicId;
    console.log(this.varId);
  }
  public recruitNow(){
    this.assignComplaint = this.selectedDesignation+" "+this.nameOfOfficer;
    this.assignedComplaints.postAssignedComplaints(this.selectedOfficer, this.varId).subscribe(
      res=>{
        console.log(res);
        alert("Incharge assigned successfully!");
        this.assignedComplaints.getUnAssignedComplaints().subscribe(
          res =>{
            this.unAssignedComplaints= res ;
          },
          err =>{
            console.log(err);
          }
        );
      },
      err=>{
        console.log(err);
      }
    );
    }
    selectChangeDesignationHandler(event:any){

      this.selectedDesignation=event.target.value;
      console.log(this.selectedDesignation);
      this.getOfficer(this.selectedDesignation);
    }
    selectChange(event:any){

      this.selectedOfficer=event.target.value;
      console.log(this.selectedOfficer);
    }
    getOfficer(rank:any){
      this.complaintService.getByRank(rank).subscribe(
        res=>{
          console.log(res);
          this.officer=res;
        },err=>{
          console.log(err);
        }
      );
    }
}
