import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  bearer = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzQwNDU3OTcsImlhdCI6MTY3NDA0MjE5NywianRpIjoiMmYyYzQ0MTUtMjcxYS00OTkyLWI4MWQtZjg1M2JkM2MwNThjIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJlMTYxY2VkYi1hMjFiLTQ0NzgtOTM0ZC05NjEzN2RmMzE2NWMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.YUeKPX9BswQbpMU0e00Gsk2VcPNvkZ5nQqu61gGcfUKyJPfAGaaSSyR-dfPzkM-t0sEaSrqtYbia-g6hHoN1yjlKOsfiYWnXaH3p_lST_OhrNNJTJvtpEnTbsYbeHttY931BIbG9F7CzoolHOhl3_tdeomWHxF5VE9mifJn_0mlXTWR2o5S7qO9ScLv5zDwfJ7hnRjUhtKi403O_s8-7wl1S5Uzt2L653m1t3A-oSFucPoENjs_yVWZUMlf3jHofvEkAEiZo0RELm7VVDFI9EVe-y_F8Je5cJCXXUWinhlAHHh7bLgHp4cgNQcg5IllyHEiDqoiIVjh4s6rE_dJ5BA";

  constructor(private http: HttpClient) {}

  // method to add an employee
  addEmployee(employee: Employee): Observable<Employee> {
    console.log(`Adding ${JSON.stringify(employee)} to backend`);
    return this.http.post<Employee>("/backend", employee, {
      headers: this.getHeaders()
    });
  }

  // method to update an employee
  updateEmployee(employee: Employee): Observable<Employee> {
    console.log(`Updating ${JSON.stringify(employee)}`);
    return this.http.put<Employee>(`/backend/${employee.id}`, employee, {
      headers: this.getHeaders(),
    });
  }

  // method to delete an employee
  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(`/backend/${employeeId}`, {
      headers: this.getHeaders(),
    });
  }

  // method to get all employees
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/backend', {
      headers: this.getHeaders(),
    });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.bearer}`);
  }
}
