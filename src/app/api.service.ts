import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  randomNumUrl =
    'http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1';

  randomVal!: Observable<string>;
  valUpdated = new Subject<string>();

  getRandom() {
    return this.http.get<string>(this.randomNumUrl).pipe(
      take(1),
      tap((val: string) => {
        this.valUpdated.next(val);
        return val;
      })
    );
  }
}
