import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../Employee";
import {EmployeeService} from "../employee.service";
import {MatChipListbox} from '@angular/material/chips';
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-employee-edit-dialog',
  templateUrl: './employee-edit-dialog.component.html',
  styleUrls: ['./employee-edit-dialog.component.scss']
})
export class EmployeeEditDialogComponent {
  employee: Employee;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  newSkill: string = "";
  chipList: MatChipListbox | undefined;
  saving: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EmployeeEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: Employee,
    private employeeService: EmployeeService
  ) {
    this.employee = data;
    this.employee.skillSet = ["Nils"]
  }

  save() {
    this.saving = true;
    this.employeeService.updateEmployee(this.employee).subscribe(editedEmployee => {
      this.saving = false;
      this.dialogRef.close(editedEmployee);
    });
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
