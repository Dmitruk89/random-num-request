import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.css'],
})
export class StreamListComponent implements OnInit {
  constructor() {}
  delayFirst = 500;
  delaySecond = 750;
  delayThird = 1000;
  @Input()
  randomVal!: string;

  ngOnInit(): void {}
}
