import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedComplaintComponent } from './finished-complaint.component';

describe('FinishedComplaintComponent', () => {
  let component: FinishedComplaintComponent;
  let fixture: ComponentFixture<FinishedComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
