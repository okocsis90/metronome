import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSignatureDialogComponent } from './time-signature-dialog.component';

describe('TimeSignatureDialogComponent', () => {
  let component: TimeSignatureDialogComponent;
  let fixture: ComponentFixture<TimeSignatureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSignatureDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeSignatureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
