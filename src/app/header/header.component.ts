import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {KeycloakService} from "keycloak-angular";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private keycloakService: KeycloakService) { }

  ngOnInit() {
  }
  logout() {
    this.keycloakService.logout('http://localhost:4200');
    //this.router.navigate(['/logout/']);
  }

}
