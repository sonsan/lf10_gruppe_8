import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../Employee";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-edit-dialog',
  templateUrl: './employee-edit-dialog.component.html',
  styleUrls: ['./employee-edit-dialog.component.css']
})
export class EmployeeEditDialogComponent {
  employee: Employee;
  constructor(
    public dialogRef: MatDialogRef<EmployeeEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: Employee,
    private employeeService: EmployeeService
  ) {
    this.employee = data;
  }
  save() {
    this.employeeService.updateEmployee(this.employee).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
