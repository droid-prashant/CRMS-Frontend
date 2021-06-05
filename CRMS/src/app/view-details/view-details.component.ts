import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseDetailService } from 'src/services/case-detail.service';
import { ComplaintsService } from 'src/services/complaints.service';
import { Display } from '../user';
import{CaseEntry} from '../_helper/_caseEntry'

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  id: any;
 display:Display= new Display();
 data: any;
 caseDetails= new CaseEntry();
 caseRecord:any;
 caseEnt:any;
 ac:any;
 SpecficData:any;
 caseIncharge:any;
  constructor(private route: ActivatedRoute, private complaints:ComplaintsService, private caseService:CaseDetailService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    console.log(this.id);
    this.getData(this.id);
  }
  getCaseData(id:number){
    this.caseService.getCaseEntry(id).subscribe(
      res=>{
        console.log(res);
        this.caseEnt=res;
      }
    );
  }
getData(id:any){
this.complaints.getOne(id).subscribe(
  res=>{

  this.data=res;
  this.caseIncharge = this.data.preg.rank+" "+ this.data.preg.firstName+" "+this.data.preg.lastName;
  this.SpecficData=this.data;
  console.log(res);
  }
  );
}
saveCaseEntry(){
  this.caseService.addCaseEntry(this.caseDetails, this.id).subscribe(
    res=>{
      console.log(res);
      this.caseRecord=res;
    }, 
    err=>{
      console.log(err);
    }
  );
}

}
