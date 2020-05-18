import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/admin/src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(user) {
    return this.httpClient.post(
      `${environment.lotteryDomain}/api/Users/authenticate`,
      user
    );

    // return this.httpClient.get(`${environment.lotteryDomain}/WeatherForecast`);
  }
}
