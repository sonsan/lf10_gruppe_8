import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "./Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  bearer = "HIER KOENNTE IHRE WERBUNG STEHEN";

  constructor(private http: HttpClient) {}

  // method to add an employee
  addEmployee(employee: Employee): Observable<Employee> {
    console.log(`Adding ${employee.lastName} to backend`);
    return this.http.post<Employee>("/backend", employee, {
      headers: this.getHeaders()
    });
  }

  // method to update an employee
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`/backend/${employee.id}`, employee, {
      headers: this.getHeaders()
    });
  }

  // method to delete an employee
  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(`/backend/${employeeId}`, {
      headers: this.getHeaders()
    });
  }

  // method to get all employees
  getAllEmployees(): Observable<Employee[]> {
    console.log("Getting all employees");
    return this.http.get<Employee[]>('/backend', {
      headers: this.getHeaders()
    });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.bearer}`);
  }
}
