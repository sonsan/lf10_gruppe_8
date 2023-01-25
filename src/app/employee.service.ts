import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from './Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Skill } from "./Skill";

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  // method to add an employee
  addEmployee(employee: Employee): Observable<Employee> {
    console.log(`Adding ${JSON.stringify(employee)} to backend`);

    if (employee.skillSet == undefined) {
      employee.skillSet = [""];
    }
    return this.http.post<Employee>("/backend/employees", employee, {
      headers: this.getHeaders()
    });
  }

  // method to update an employee
  updateEmployee(employee: Employee): Observable<Employee> {
    console.log(`Updating ${JSON.stringify(employee)}`);
    return this.http.put<Employee>(`/backend/employees/${employee.id}`, employee, {
      headers: this.getHeaders(),
    });
  }

  // method to delete an employee
  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(`/backend/employees/${employeeId}`, {
      headers: this.getHeaders(),
    });
  }

  // method to get all employees
  getAllEmployees(): Observable<Employee[]> {
    console.log('loading employees from backend')
    return this.http.get<Employee[]>('/backend/employees', {
      headers: this.getHeaders(),
    });
  }

  addEmployeeQualification(employee: Employee, skill: Skill): Observable<Employee> {
    return this.http.post<Employee>(`/backend/employees/${employee.id}/`, skill, {
      headers: this.getHeaders()
    });
  }

  removeEmployeeQualification(skill: Skill): Observable<Employee> {
    return this.http.delete<Employee>(`/backend/employees/${skill.designation}/qualifications`, {
      headers: this.getHeaders()
    });
  }

  getEmployeesWithSkill(skill: Skill): Observable<Employee[]> {
    return this.http.get<Employee[]>(`/backend/qualifications/${skill.designation}/employees`, {
      headers: this.getHeaders()
    }).pipe(map((resp: any) => resp.employees));
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders();
  }
}
