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

  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzI3NjI0NTksImlhdCI6MTY3Mjc1ODg1OSwianRpIjoiNjk1NDVlNzEtMGQwNy00NGU1LTgxZDEtZThlNDEzNjFkYmVhIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIwYTQ3OTY5Yy0xNWEyLTQ1NjMtOGE5My0yZDM3ODZmNDhhMGIiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.ThSr-WzDef9e0HMrPDBipPoUbq5_NXhLSH79-oTv5T2oAEGAg09tUv9YLfj8RkzXsXupqz8WcNHL1t7d_3lanqWSw1dK5slxtDqELIFg_3S6FRpXyvRpS0iYYBj3h5V8H3I5y7iA4KS7H_cK3aCE2PanmdMG2nELHmvS8VIlOTu9MnbGYyYjr0tOADjqct4whonw2SN8nIt4ArmRQf_if60jkZ0QfEyaMo2jhd_Dx93idWc4AnteicxMWnJ6mz1uIPhWsx9OYu0_o0b0BZjT8oLlQikdxWrWegIG3dy12cwvlMD3WOoSZGqsddY9FaJ6Xe2VCHT1ZdhwRYOxPuFHzA';
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
