
import { Component, Inject, Injectable, InjectionToken, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Employee } from '../Employee';
import { EmployeeService } from "../employee.service";
import { MatChipListbox } from '@angular/material/chips';
import { COMMA, E, ENTER } from "@angular/cdk/keycodes";


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form-dialog.component.html',
  styleUrls: ['./employee-form-dialog.component.scss']
})


export class EmployeeFormDialogComponent {
  employee: Employee;
  isEditing: boolean = false;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  newSkill: string = "";
  chipList: MatChipListbox | undefined;
  saving: boolean = false;


  constructor(
    public dialogRef: MatDialogRef<EmployeeFormDialogComponent>,

    @Inject(MAT_DIALOG_DATA) data: Employee,

    private employeeService: EmployeeService
  ) {
    this.employee = data;
    this.isEditing = this.employee.id != undefined;
  }

  save() {
    this.saving = true;
    if (this.isEditing) {
      this.employeeService.updateEmployee(this.employee).subscribe(editedEmployee => {
        this.saving = false;
        this.dialogRef.close(editedEmployee);
      });
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(createdEmployee => {
        this.saving = false;
        this.dialogRef.close(createdEmployee);
      });
    }

  }

  removeSkill(skill: string) {
    if (!this.employee.skillSet) {
      return;
    }
    const skillIndex = this.employee.skillSet.indexOf(skill);
    if (!skillIndex) {
      return;
    }

    if (skillIndex >= 0) {
      this.employee.skillSet.splice(skillIndex, 1);
    }
  }

  addSkill(skill: string): void {
    this.employee.skillSet?.push(skill);
    this.newSkill = "";
  }
}


