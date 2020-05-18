import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');

    const tokenPayload = decode(token);
    if (!this.auth.isAuthenticated() || tokenPayload.Name !== 'Admin') {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
