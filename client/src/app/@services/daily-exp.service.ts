import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DailyExpService {
  uriPrefix = environment.ApiPrefix;
  constructor(private http: HttpClient) { }

  addExpense(payload: any): Observable<any> {
    console.log(`${this.uriPrefix}addExpense`);
    console.log(payload)

    return this.http.post<any>(`${this.uriPrefix}addExpense`, payload);
  }

  getExpenses(): Observable<any> {
    return this.http.get(`${this.uriPrefix}getExpenses`);
  }

}
