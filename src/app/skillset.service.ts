import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Skill } from './Skill';

@Injectable({
  providedIn: 'root',
})
export class SkillsetService {
  constructor(private http: HttpClient) {}

  /**
   * Create a new skill.
   * @param {Skill} skill the skill to create.
   *
   * Will add the skill to the backend.
   */
  addSkill(skill: Skill): Observable<Skill> {
    console.log(`Adding ${JSON.stringify(skill)} to backend `);
    return this.http.post<Skill>(
      '/backend/qualifications',
      { designation: skill.designation },
      {
        headers: this.getHeaders(),
      }
    );
  }

  /**
   * Delete a skill.
   * @param {Skill} skill the skill to delete.
   *
   * Will delete the skill from the backend based on it's designation.
   */
  deleteSkill(skill: Skill): Observable<any> {
    return this.http.delete<any>(
      `/backend/qualifications/${skill.designation}`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  /**
   * Get all available skills.
   */
  getAllSkills(): Observable<Skill[]> {
    console.log('loading skills from backend');
    return this.http.get<Skill[]>('/backend/qualifications', {
      headers: this.getHeaders(),
    });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders();
  }
}
