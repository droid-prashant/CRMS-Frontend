import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenceRecordsComponent } from './evidence-records.component';

describe('EvidenceRecordsComponent', () => {
  let component: EvidenceRecordsComponent;
  let fixture: ComponentFixture<EvidenceRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenceRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
