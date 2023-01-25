import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Skill} from "./Skill";

@Injectable({
  providedIn: 'root',
})
export class SkillsetService {
  constructor(private http: HttpClient) {}

  // method to add an employee
  addSkill(skill: Skill): Observable<Skill> {
    console.log(`Adding ${JSON.stringify(skill)} to backend `);
    return this.http.post<Skill>("/backend/qualifications", {designation: skill.designation}, {
      headers: this.getHeaders()
    });
  }

  // method to delete an employee
  deleteSkill(skill: Skill): Observable<any> {
    return this.http.delete<any>(`/backend/qualifications/${skill.designation}`, {
      headers: this.getHeaders(),
    });
  }

  // method to get all employees
  getAllSkills(): Observable<Skill[]> {
    console.log('loading skills from backend')
    return this.http.get<Skill[]>('/backend/qualifications', {
      headers: this.getHeaders(),
    });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders();
  }
}
