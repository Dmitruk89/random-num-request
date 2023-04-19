import { Component, Input, OnInit } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-random-num',
  templateUrl: './random-num.component.html',
  styleUrls: ['./random-num.component.css'],
})
export class RandomNumComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  @Input()
  delay!: number;
  randomNum$!: Observable<string>;

  ngOnInit() {
    this.randomNum$ = this.apiService.valUpdated$.pipe(delay(this.delay));
  }
}
