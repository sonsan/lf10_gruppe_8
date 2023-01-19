import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  bearer = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzQxNjI1MzEsImlhdCI6MTY3NDE1ODkzMSwianRpIjoiOTZiZjhlMDQtMWZlNi00YzViLWIxOTYtMjRhMmIzMjE3YjZkIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJkZDg3ODBjOC1lMDYyLTRhZjQtOTU4Yy1lMjk4Yzg1NTZjODkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.bnSmA1lfP_1Io4X_kOZDGY0P83-4vMqjPXzpGlqbiBFoROiJU53Uh6XzXayHQL3dI4dCUu_oztKdq9pBDucOfBkH9wyPj0XsAOiVwnTJO7XHzUskGNVLQksbDmGnHIcTUojhMKycXyV2CxFWEJPs2RZZJF8t_mhH4-Ia0kw0Dvehbi532vK_2EC8dcCwADGvyMC_tPhtMC_veD0hzYEDnTbu_M26qmub6aO37VNRaZuhq-eo2f67oZTafNKkm0sznUDGNQfw04T__QiMdSJ3-_AnGw2cjntj28-PF_kaoA9wzS60eD8rcSnc1j086RinTBwmt062IJvHzeUKvs8CtA";

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
    console.log('loading employees from backend')
    return this.http.get<Employee[]>('/backend', {
      headers: this.getHeaders(),
    });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.bearer}`);
  }
}
