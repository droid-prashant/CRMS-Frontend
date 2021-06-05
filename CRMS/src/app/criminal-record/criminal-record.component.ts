import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from 'src/services/complaints.service';
import { CriminalEntry } from '../_helper/_criminalEntry';

@Component({
  selector: 'app-criminal-record',
  templateUrl: './criminal-record.component.html',
  styleUrls: ['./criminal-record.component.css']
})
export class CriminalRecordComponent implements OnInit {
  criminalRecord:CriminalEntry=new CriminalEntry();
  criminalList: any;
  c_id: any;
  criminalInfo:CriminalEntry=new CriminalEntry();

  constructor(private service:ComplaintsService) { }

  ngOnInit(): void {
    this.viewAllCriminal();


  }
addCrimijalRecord(){
  this.service.postCrminalRecord(this.criminalRecord).subscribe(
    res=>{
      console.log(res);
      alert("Successfully Added");
      window.location.reload();

    },err=>{
      console.log(err);
    }
  );
}
viewAllCriminal(){
  this.service.getAllCriminal().subscribe(
    res=>{
      console.log(res);
      this.criminalList=res;
    },err=>{
      console.log(err);
    }
  );
}
fetchedId(id:number){
  this.c_id=id;
  console.log(this.c_id);
  this.viewCriminalByID();
}
viewCriminalByID(){
  this.service.getCriminalById(this.c_id).subscribe(
    res=>{
      console.log(res);
      this.criminalInfo=res;
    }, err=>{
      console.log(err);
    }
  );
}
}
