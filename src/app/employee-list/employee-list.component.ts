import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzI3NjYxMDgsImlhdCI6MTY3Mjc2MjUwOCwianRpIjoiZDQ5MDhhNzMtMDkxMC00MWU2LWFlOTYtNzE0Mzk0NmJjMjdlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIxMjM0MDNhYy1iNWI0LTQyYmEtODc1NS01NmQ2MzZiNWE2NzMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.ZXAZIHnwcJzbkXbSQKnlfy6W2H_jxPVRH5vQDOnkhZBZOj01L0NFJiIeFwmXsVSiO5l-vQ65ZaM0cqzh_z4lx93M6WVEM7cZLSTAqbwsVw9vedbk9CdoQsc-Dss7lY0UJQ62PTZJXF6Teg2O0e9UUElAV1YgcYgRhf60L0CwuY-ZJTZsq_EgjMAR4urMx6nnyHyUpr5CRX8DSKGsdEo1LyZuifqgA89AV2pW5Cfp8E0Dp3EOmKGpCZCJbC1-PKTqAekKLPkKGXLI9v-6ekHobOXEHCmQM4kbl4__y7t5MzIOtICYL6kEm_ihzTPg4NwQvHVnm3JHgoYXtFyokTYa4w';
  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

}
