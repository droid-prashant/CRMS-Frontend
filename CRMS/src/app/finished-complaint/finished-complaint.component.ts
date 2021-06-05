import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from 'src/services/complaints.service';

@Component({
  selector: 'app-finished-complaint',
  templateUrl: './finished-complaint.component.html',
  styleUrls: ['./finished-complaint.component.css']
})
export class FinishedComplaintComponent implements OnInit {
  allFinishedComplaints: any;

  constructor(private service:ComplaintsService) { }

  ngOnInit(): void {
    this.viewFinishedComplaints();
  }
viewFinishedComplaints(){
  this.service.listFinishedComplaints().subscribe(
    res=>{
      console.log(res);
      this.allFinishedComplaints=res;
    },err=>{
      console.log(err);
    }
  );
}
}
