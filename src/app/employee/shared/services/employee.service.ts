import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'app/employee/shared/models/employee';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

  private url = 'http://localhost:5000/employee';

  constructor(private http: HttpClient) { }

  save(employee: Employee) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    const options = { headers: headers }
    return this.http.post (this.url, employee, options)
      .map((data: any) => JSON.parse(data))
      .catch(this.handleError)
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}
