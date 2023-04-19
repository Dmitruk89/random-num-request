import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  randomNum$!: Observable<string>;

  ngOnInit() {
    this.randomNum$ = this.apiService.getRandom();
  }

  onButtonClick() {
    this.randomNum$ = this.apiService.getRandom();
  }
}
