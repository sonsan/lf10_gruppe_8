import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  bearer =
    'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzQwMzE5MTcsImlhdCI6MTY3NDAyODMxNywianRpIjoiOGVmZmMyMmYtYzlmNi00M2NiLTg1ZDctNWQ1Mjc2MGQ2N2FlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJlNzE0NTQxZi1iOTAzLTRlMTYtODdkMy1kMWRjMTRmOGY5N2QiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.SIXJHV6sCMyJqQGeuVofyxSTPDm-C7LUSeOyEqAy1dlyYy1Cfqs853Wp2w89fhNhKkR2XjMkV6upnXxPxNGRs1fhB4iq0lYm80pIEthZnAnxKqldsvyTtJbUNtfhO0ZUdRcz0xLDh42RTyzBXcVU9NxJEJlGE9Bkoj9bv0rgpukxUKwcOWoKh73YUaxVLQT4mZWLUSvrVw2AZu-lxxHojcTCjAaw-Vs8fPvcwEyFZ583gFvvzCkc8C9o9SLcHZJr-jzndqlHibVTDke-49TwF3UpkuRjRBkUp6Ni9vlZ0Dgs05GqTlZ_c9IiaRzzqus_uOrYR0Aet8jYzvtgL_X3RA';

  constructor(private http: HttpClient) {}

  // method to add an employee
  addEmployee(employee: Employee): Observable<Employee> {
    console.log(`Adding ${employee.lastName} to backend`);
    return this.http.post<Employee>('/backend', employee, {
      headers: this.getHeaders(),
    });
  }

  // method to update an employee
  updateEmployee(employee: Employee): Observable<Employee> {
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
    console.log('Getting all employees');
    return this.http.get<Employee[]>('/backend', {
      headers: this.getHeaders(),
    });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.bearer}`);
  }
}
