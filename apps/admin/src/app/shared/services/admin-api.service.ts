import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/admin/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllRole() {
    return this.httpClient.get(`${environment.lotteryDomain}/role/getAll`);
  }
  
}
