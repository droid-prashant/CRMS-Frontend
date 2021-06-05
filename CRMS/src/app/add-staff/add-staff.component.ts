import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { staffEntry } from '../user';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  policeStaffRegistration: staffEntry = new staffEntry();
  currentFile: any;
  selectedFile:any=File;
  selectedPhoto: any
  id:any
  username:any;
  selectedSubject:any
  listAll: any;
  isRegistered:Boolean=false;
  regDetails:any;
  pict: any;
  

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  staffEntry() {
   this.service.staffRecordEntry(this.username,this.policeStaffRegistration).subscribe(
      res => {
        console.log(res);
        this.regDetails=res
        this.Upload();
        if(this.regDetails.id!=null){
          this.isRegistered=true;
        }
        else{
          this.isRegistered=false;
        }
      }, err => {
        console.log(err);
      }
    );
  
  }

  onFileSelected(event:any){
    console.log(event);
    
    this.selectedFile=event.target.files[0];
  }

  Upload() {
    this.currentFile = this.selectedFile;
    const uploadFile: FormData = new FormData();
    uploadFile.append('file', this.selectedFile, this.selectedFile.name);
    this.service.addPhoto(this.username, uploadFile)
  
      .subscribe(res  => {
        console.log(res);
        this.pict=res;
        
      }, err => {
        console.log(err);
      });
  }
}
