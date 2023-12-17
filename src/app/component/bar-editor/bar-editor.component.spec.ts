import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarEditorComponent } from './bar-editor.component';

describe('BarEditorComponent', () => {
  let component: BarEditorComponent;
  let fixture: ComponentFixture<BarEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
