import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private resultSource = new BehaviorSubject(false);
  latestResult = this.resultSource.asObservable();

  constructor(private apiService: ApiService) {}

  getPlanets() {
    return this.apiService.getRequest('/planets');
  }

  getVehicles() {
    return this.apiService.getRequest('/vehicles');
  }

  getToken() {
    return this.apiService.postRequest('/token', null);
  }

  findFalcone(data:any) {
    return this.apiService.postRequest('/find', data);
  }

  updateLatestResult(data) {
    this.resultSource.next(data)
  }
}
