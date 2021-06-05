import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitOfficerComponent } from './recruit-officer.component';

describe('RecruitOfficerComponent', () => {
  let component: RecruitOfficerComponent;
  let fixture: ComponentFixture<RecruitOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
