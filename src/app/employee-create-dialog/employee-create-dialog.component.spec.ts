import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreateDialogComponent } from './employee-create-dialog.component';

describe('EmployeeCreateDialogComponent', () => {
  let component: EmployeeCreateDialogComponent;
  let fixture: ComponentFixture<EmployeeCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCreateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
