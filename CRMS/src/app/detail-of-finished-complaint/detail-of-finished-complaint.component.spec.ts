import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfFinishedComplaintComponent } from './detail-of-finished-complaint.component';

describe('DetailOfFinishedComplaintComponent', () => {
  let component: DetailOfFinishedComplaintComponent;
  let fixture: ComponentFixture<DetailOfFinishedComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOfFinishedComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOfFinishedComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
