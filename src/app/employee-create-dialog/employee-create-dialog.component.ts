import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Employee } from "../Employee";
import { EmployeeService } from "../employee.service";
import { MatChipEditedEvent, MatChipListbox } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";

@Component({
  selector: 'app-employee-create-dialog',
  templateUrl: './employee-create-dialog.component.html',
  styleUrls: ['./employee-create-dialog.component.scss']
})
export class EmployeeCreateDialogComponent {
  employee: Employee = new Employee(undefined, "", "", "", "", "", "", ["Nils"]);
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  newSkill: string = "";
  chipList: MatChipListbox | undefined;
  saving: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EmployeeCreateDialogComponent>,
    private employeeService: EmployeeService
  ) {
  }
  save() {
    // TODO: valid check
    if (this.employee) {
      this.saving = true;
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

  addSkill(): void {
    console.log(`Adding ${this.newSkill} to employee skillset`);
    if (this.newSkill.length > 0) {
      this.employee.skillSet?.push(this.newSkill);
      this.newSkill = "";
    }

  }

  editSkill(skill: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!this.employee.skillSet) {
      return;
    }

    if (!value) {
      this.removeSkill(skill);
      return;
    }

    const index = this.employee.skillSet.indexOf(skill);
    if (index >= 0) {
      this.employee.skillSet[index] = value;
    }
  }
}
