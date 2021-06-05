import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/services/token-service.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-evidence-records',
  templateUrl: './evidence-records.component.html',
  styleUrls: ['./evidence-records.component.css']
})
export class EvidenceRecordsComponent implements OnInit {
  selectedFile: any;
  currentFile: any;
  username:any;
  fetched_data: any;
  fetched_user: any;
  allFiles:any;


  constructor(private service:UserService, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  this.fetched_data=this.tokenStorage.getUser();
  this.fetched_user=this.fetched_data.username;
  this.allFiles=this.listAllFile();
  console.log(this.allFiles)

  }
  onFileSelected(event:any){
    console.log(event);
    this.selectedFile=event.target.files[0];

  }
  upload(){
    
    this.currentFile=this.selectedFile;
    const uploadFile:FormData= new FormData();
    uploadFile.append('file',this.selectedFile,this.selectedFile.name);
    this.service.addEvidence(this.fetched_user,uploadFile).subscribe(
res=>{
  console.log(res);
  alert("File uploaded Successfully")
},err=>{
  console.log(err);
}
    );
  }
  listAllFile(){
    this.service.getAllFile().subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      }
    );
  }
}
