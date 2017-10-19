import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LanguageService {

  private url = 'http://localhost:5000/languages';

  constructor(private http: HttpClient) { }

  getLanguages() {
    return this.http.get(this.url)
      .map((data: any) => JSON.parse(data))
      .catch(this.handleError)
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}
