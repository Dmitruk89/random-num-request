import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  randomNumUrl =
    'http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1';

  private _valUpdated$ = new Subject<string>();

  public set valUpdated(value: string) {
    this._valUpdated$.next(value);
  }

  public get valUpdated$(): Observable<string> {
    return this._valUpdated$.asObservable();
  }

  getRandom() {
    return this.http.get<string>(this.randomNumUrl).pipe(
      tap((val: string) => {
        this.valUpdated = val;
      })
    );
  }
}
