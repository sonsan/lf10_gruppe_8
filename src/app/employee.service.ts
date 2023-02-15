import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from './Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Skill } from './Skill';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  /**
   * Adds a employee to the backend.
   * @param {Employee} employee the employee to add.
   * @return {Observable<Employee>} the changed object.
   */
  addEmployee(employee: Employee): Observable<Employee> {
    console.log(`Adding ${JSON.stringify(employee)} to backend`);

    if (employee.skillSet == undefined) {
      employee.skillSet = [''];
    }
    return this.http.post<Employee>('/backend/employees', employee, {
      headers: this.getHeaders(),
    });
  }

  /**
   * Updates a existing employee.
   * @param {Employee} employee the employee to update.
   * @return {Observable<Employee>} the changed object.
   *
   * Will change the existing employee with the input parameter.
   * Based on the employee id.
   */
  updateEmployee(employee: Employee): Observable<Employee> {
    console.log(`Updating ${JSON.stringify(employee)}`);
    return this.http.put<Employee>(
      `/backend/employees/${employee.id}`,
      employee,
      {
        headers: this.getHeaders(),
      }
    );
  }

  /**
   * Delete a employee.
   * @param {number} employeeId the id of the employee to delete.
   *
   * Will delete a existing employee based on id.
   */
  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(`/backend/employees/${employeeId}`, {
      headers: this.getHeaders(),
    });
  }

  /**
   * Get a employee by their id
   * @param {number} employee_id the id of the employee.
   */
  getEmployee(employee_id: number): Observable<Employee> {
    return this.http.get<Employee>(`/backend/employees/${employee_id}`, {
      headers: this.getHeaders(),
    });
  }

  /**
   * Read all employees from the Backend.
   */
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/backend/employees', {
      headers: this.getHeaders(),
    });
  }

  /**
   * Add a qualification for the employee.
   * @param {Employee} employee the employee to give the qualification
   * @param {Skill} skill the qualification to give the employee.
   * @note Currently not supported by the backend.
   */
  addEmployeeQualification(
    employee: Employee,
    skill: Skill
  ): Observable<Employee> {
    return this.http.post<Employee>(
      `/backend/employees/${employee.id}/`,
      skill,
      {
        headers: this.getHeaders(),
      }
    );
  }

  /**
   * Remove the skill from the backend.
   * @param {Skill} skill the skill to delete.
   */
  removeEmployeeQualification(skill: Skill): Observable<Employee> {
    return this.http.delete<Employee>(
      `/backend/employees/${skill.designation}/qualifications`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  /**
   * Get all employees who have a specified skill.
   * @param {Skill} skill the skill with which to search.
   * @returns {Employee} list of all employees with the skill.
   */
  getEmployeesWithSkill(skill: Skill): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(
        `/backend/qualifications/${skill.designation}/employees`,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(map((resp: any) => resp.employees));
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders();
  }
}
