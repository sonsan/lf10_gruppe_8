import { Component } from '@angular/core';
import { Employee } from "./Employee";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  }

}
