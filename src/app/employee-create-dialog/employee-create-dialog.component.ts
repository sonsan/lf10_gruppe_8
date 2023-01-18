import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../Employee";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-create-dialog',
  templateUrl: './employee-create-dialog.component.html',
  styleUrls: ['./employee-create-dialog.component.css']
})
export class EmployeeCreateDialogComponent {
  employee: Employee = new Employee(undefined, "", "", "", "", "", "");

  constructor(
    public dialogRef: MatDialogRef<EmployeeCreateDialogComponent>,
    private employeeService: EmployeeService
  ) {
  }
  save() {
    // TODO: valid check
    if (this.employee) {
      this.employeeService.addEmployee(this.employee).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }
}
