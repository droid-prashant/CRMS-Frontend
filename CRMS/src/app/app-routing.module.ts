import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CriminalRecordComponent } from './criminal-record/criminal-record.component';
import { RecruitOfficerComponent } from './recruit-officer/recruit-officer.component';
import { AssignedComplaintsComponent } from './assigned-complaints/assigned-complaints.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { FinishedComplaintComponent } from './finished-complaint/finished-complaint.component';
import { StaffAccountComponent } from './staff-account/staff-account.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ViewStaffRecordsComponent } from './view-staff-records/view-staff-records.component';
import { EvidenceRecordsComponent } from './evidence-records/evidence-records.component';
import { DetailOfFinishedComplaintComponent } from './detail-of-finished-complaint/detail-of-finished-complaint.component';


const routes: Routes = [

  {
    path : "register-complaint", component : RegisterComplaintComponent
  },
  {
    path: "admin-login", component:AdminLoginComponent
  },
  {
    path:"staff-login", component:StaffLoginComponent

  },
  {
    path:"admin-dashboard", component:AdminDashboardComponent
  },
  {
    path:"criminal-record",component:CriminalRecordComponent
  },
  
  {
    path:"assigned-complaint",component:AssignedComplaintsComponent
  },
  {
    path:"admin-dashboard",component:AdminDashboardComponent
  },
  {
    path:"view/:id", component:ViewDetailsComponent
  },
  {
    path:"finished-complaint", component:FinishedComplaintComponent
  },
  {
    path:"staff-account", component:StaffAccountComponent
  },
  {
    path:"view-staffs", component:ViewStaffRecordsComponent
  },
  {
    path:"add-staff",component:AddStaffComponent
  },
  {
    path:"evidence-record", component:EvidenceRecordsComponent
  },
  {
    path:"finished-complaint-details/:id",component:DetailOfFinishedComplaintComponent
  }
   
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
