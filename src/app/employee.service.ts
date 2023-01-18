import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "./Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  bearer = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzQwMzA3MDksImlhdCI6MTY3NDAyNzEwOSwianRpIjoiMWIxZGRmN2EtZWYzZS00YzJlLThhNTctOWQwMTAwM2YyOGZiIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJlYjVlMzA0MC1hOGU1LTRkNGUtYWUwNS1lNjIyNjQ4YWM2MDkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.PoE2kepdhRdvLs7pNbCYtWVj3lc7trYD51C7fCJZrEUXJQ7Uoi5b2f5BF0rTrW3Iafc3WBxsAszhDuJ2I5Mo53T15YwkVBDIhw3gRBbmghZ-ugYsLsNEHnpg5WTUCWJipFTJoM2LjP2Qt95Vnn2HXdhKkWxgYY7_iGKM1-ZOJkzBQfStm0ND6rQGNoCXYI4tU-99ITNxrz3QKeCHZae2dY6ZyUYv3GAcOi1WjAlLoAJ5dpQnNQx7GwZUFXW2p3U5GrfEpp-Rx5091Aco8nRq9nCGIPj95uxnWBLrrpV8xQJaWTR6OT4Qy70KOadkhGioF75LdiDi2ZvT_aczg5Skkg";

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
