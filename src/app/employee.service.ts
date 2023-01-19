import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  bearer = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzQxNDIwNzIsImlhdCI6MTY3NDEzODQ3MiwianRpIjoiMzU2N2I2MTQtZGM1Ni00YTUzLTllZmUtNGE0NjFjOGM2ZTc4IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJkODNlMWI0OS02YjBhLTRkMDMtYjcxYS1mYWY4Njg0NjYyNGUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.b--4UPQTgUUaCSzJojJGd_0jgN03Flc2lLtZQOVnQAG9DBdw64L3Hr94ghtKFeGfx0UgZ07j1zMSo7feYRc2TVMIMV0edrzD4TsKR8wWN8OsKsNg2nOQ2aER1ht0UPYeQnOOG5rWbSaKcde8SOAVAjCJ7E_2swRtydEWaRiFECm-7tNd7N5VEZwX40n8_Z-05hnV0MPsbatjRV-1QZh0Np4Z4zXd24hZsFTZhcJ9gmiiImjkY9Yg77NTGdwiJhf9UQsJP0dP9WLuz9OlayLb-sqDP0WkcMyUhVnHrQ47VTEBe8p1zltT6wgn_5sactDUxXqH8J54PwPPcNs2drm9wQ";

  constructor(private http: HttpClient) {}

  // method to add an employee
  addEmployee(employee: Employee): Observable<Employee> {
    console.log(`Adding ${JSON.stringify(employee)} to backend`);
    return this.http.post<Employee>("http://localhost:8089/backend", employee, {
      headers: this.getHeaders()
    });
  }

  // method to update an employee
  updateEmployee(employee: Employee): Observable<Employee> {
    console.log(`Updating ${JSON.stringify(employee)}`);
    return this.http.put<Employee>(`http://localhost:8089/backend/${employee.id}`, employee, {
      headers: this.getHeaders(),
    });
  }

  // method to delete an employee
  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8089/backend/${employeeId}`, {
      headers: this.getHeaders(),
    });
  }

  // method to get all employees
  getAllEmployees(): Observable<Employee[]> {
    console.log('loading employees from backend')
    return this.http.get<Employee[]>('http://localhost:8089/employees', {
      headers: this.getHeaders(),
    });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.bearer}`);
  }
}
