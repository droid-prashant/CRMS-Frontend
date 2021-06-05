import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStaffRecordsComponent } from './view-staff-records.component';

describe('ViewStaffRecordsComponent', () => {
  let component: ViewStaffRecordsComponent;
  let fixture: ComponentFixture<ViewStaffRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStaffRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStaffRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
