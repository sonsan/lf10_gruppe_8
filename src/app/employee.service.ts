import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "./Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  bearer = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzQwMzk1NjMsImlhdCI6MTY3NDAzNTk2MywianRpIjoiMGMxMTY5ZjMtNjI2Zi00MmRiLWJhNWMtZDhkOGMwMjFmYTYzIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIxYjI3NDE5Ny0zZWVkLTQ2NmEtOTgxZi1mY2EzZDc4Zjk1YzIiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.b30pWEJOoRV_iLmIX2l2kOimGq-fjrTRnAnZj60MOgUOIgNcq3NgsgcWB0Zd7usOm499r0vQmyOtDyiadF1elzXmRWfzerIgE0rJc1tV0ak3OxrSDk6dbpfpJQSnWcaBzceAj_S2QPyFgWbtd-SxfGXFRCiaeQ1CDOm3M3OQwhD34QR0dO1Lsh0joj-UREoVeUEfB7ZxP0SKtcVAUOR2EQX1wE7PYuJL0QkLQtjQfhuDs9LxNyIstThuQQbWBl3G2gNMCYi7mb-ZjSJxXGWKpMGJNQGSjrOxkHFJ-V5wQjwSbeByn9_nJk917aJmeVVqeKm0Cx3KIYZENHIQYmtuTA";

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
    return this.http.get<Employee[]>('/backend', {
      headers: this.getHeaders()
    });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.bearer}`);
  }
}
