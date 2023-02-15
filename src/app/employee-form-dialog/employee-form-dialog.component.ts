import {
  Component,
  Inject,
  Injectable,
  InjectionToken,
  inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { MatChipListbox } from '@angular/material/chips';
import { COMMA, E, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form-dialog.component.html',
  styleUrls: ['./employee-form-dialog.component.scss'],
})
export class EmployeeFormDialogComponent {
  employee: Employee;
  employeeExists: boolean = false;
  employeeReadonly: boolean = false;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  newSkill: string = '';
  chipList: MatChipListbox | undefined;
  saving: boolean = false;
  postcodeValid: boolean = false;
  employeeForm: FormGroup = new FormGroup({
    postcode: new FormControl('', [
      Validators.pattern('[0-9]{5}'),
      Validators.required,
    ]),
  });

  constructor(
    public dialogRef: MatDialogRef<EmployeeFormDialogComponent>,

    @Inject(MAT_DIALOG_DATA) data: any,
    private employeeService: EmployeeService
  ) {
    this.employee = data.employee;
    this.employeeReadonly = data.employeeReadonly;
    this.employeeExists = this.employee.id != undefined;
  }

  save() {
    this.saving = true;
    if (this.employeeExists && !this.employeeReadonly) {
      this.employeeService
        .updateEmployee(this.employee)
        .subscribe((editedEmployee) => {
          this.saving = false;
          this.dialogRef.close(editedEmployee);
        });
    } else {
      this.employeeService
        .addEmployee(this.employee)
        .subscribe((createdEmployee) => {
          this.saving = false;
          this.dialogRef.close(createdEmployee);
        });
    }
  }
}
