import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { CriminalRecordComponent } from './criminal-record/criminal-record.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { authInterceptorProviders } from './_helper/auth-Interceptor';
import { RecruitOfficerComponent } from './recruit-officer/recruit-officer.component';
import { AssignedComplaintsComponent } from './assigned-complaints/assigned-complaints.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { FinishedComplaintComponent } from './finished-complaint/finished-complaint.component';
import { StaffAccountComponent } from './staff-account/staff-account.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ViewStaffRecordsComponent } from './view-staff-records/view-staff-records.component';
import { EvidenceRecordsComponent } from './evidence-records/evidence-records.component';
import { DetailOfFinishedComplaintComponent } from './detail-of-finished-complaint/detail-of-finished-complaint.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComplaintComponent,
    StaffLoginComponent,
    CriminalRecordComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    RecruitOfficerComponent,
    AssignedComplaintsComponent,
    ViewDetailsComponent,
    FinishedComplaintComponent,
    StaffAccountComponent,
    AddStaffComponent,
    ViewStaffRecordsComponent,
    EvidenceRecordsComponent,
    DetailOfFinishedComplaintComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
