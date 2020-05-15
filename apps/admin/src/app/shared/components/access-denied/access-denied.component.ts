import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'lottery-workspace-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.css']
})
export class AccessDeniedComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  logout() {
    
  }

}
