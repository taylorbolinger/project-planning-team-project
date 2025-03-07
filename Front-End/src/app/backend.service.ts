import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private backendUrl = 'http://localhost:8080';

  private headers = new HttpHeaders({
    'Authorization': 'Basic ' + btoa('user:password'),
    'Custom-Header': 'FE-Request'
  });

  constructor(private http: HttpClient) { }

  // Demonstrate the connection to the backend with this simple hello endpoint.
  getHello(): Observable<any> {
    return this.http.get<any>(`${this.backendUrl}/api/hello`, { headers: this.headers });
  }
}
