import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintsService } from 'src/services/complaints.service'
import { TokenStorageService } from 'src/services/token-service.service';
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-assigned-complaints',
  templateUrl: './assigned-complaints.component.html',
  styleUrls: ['./assigned-complaints.component.css']
})
export class AssignedComplaintsComponent implements OnInit {
  assignComplaints: any;
  pregId: any
  currentUser: any;
  viewStaff: any;
  staffId: any;
  obj_id: any;
  role:any[]=[];
  user:Boolean=false;
  admin:Boolean=false;
  allAssigned: any;
  f_comp_id: any;
  f_Complaint:any;
  assId: any;
  pr_id: any;
  constructor(private Complaint: ComplaintsService, private route: ActivatedRoute,
    private tokenService: TokenStorageService,
    private viewStaffService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
    this.role=this.currentUser.roles;
    console.log(this.role);
    console.log(this.currentUser);
    if(this.role.includes('ROLE_ADMIN')){
      this.admin=true;
      this.user=false;
      this.receiveAllAssigned();

    }
    else{
      this.admin=false;
      this.user=true;
    this.getStaffById();
    }
    this.route.snapshot.params.publicId;
  }
  assignedComplaints(id: any) {
    this.Complaint.getAssignedComplaints(id).subscribe(
      res => {

        this.assignComplaints = res;

      },
      err => {
        console.log(err);
      }
    );
  }
  getStaffById() {
    this.obj_id = this.currentUser.id;
    this.viewStaffService.viewOneStaff(this.obj_id).subscribe(
      res => {
        console.log(res);
        this.staffId = res.id;
        this.assignedComplaints(this.staffId);
        console.log(this.staffId);


      },
      err => {
        console.log(err);
      }
    );
  }
  receiveAllAssigned() {
    this.Complaint.getAllAssigned().subscribe(
      res => {
        console.log(res);
        this.allAssigned=res;
        this.f_comp_id=res.pr;
      }, err => {
        console.log(err);
      }
    );
  }
  finishedComplaints(){
    this.Complaint.postCompletedComplaints(this.assId, this.pr_id).subscribe(
      res=>{
        window.location.reload();
        console.log(res);
      }, err=>{
        console.log(err);
      }
    );
  }
  fetchedId(publicId:number,id:number){
    this.assId=publicId;
    this.pr_id=id;
    console.log(this.assId);
  }
}
