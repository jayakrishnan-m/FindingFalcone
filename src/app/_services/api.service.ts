import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApiService {
  apiBaseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  getRequest(path: string) {
    path = this.apiBaseUrl + path;
    return this.httpClient.get(path);
  }

  postRequest(path: string, data: any) {
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        
      }
    };
    path = this.apiBaseUrl + path;
    return this.httpClient.post(path, data, options);
  }
}
