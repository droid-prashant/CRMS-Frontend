import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintsService } from 'src/services/complaints.service';
import { User } from '../user';

@Component({
  selector: 'app-detail-of-finished-complaint',
  templateUrl: './detail-of-finished-complaint.component.html',
  styleUrls: ['./detail-of-finished-complaint.component.css']
})
export class DetailOfFinishedComplaintComponent implements OnInit {
  id: any;
  publicData:User=new User();

  constructor(private route:ActivatedRoute, private service:ComplaintsService) { }

  ngOnInit(): void {
    this.id=(this.route.snapshot.params.id);
    console.log(this.id)
    this.viewUnassignedByID();
  }
viewUnassignedByID(){
  this.service.getUnAssignedById(this.id).subscribe(
    res=>{
      console.log(res);
      this.publicData=res;
    },err=>{
      console.log(err);
      
    }
  );
}
}
