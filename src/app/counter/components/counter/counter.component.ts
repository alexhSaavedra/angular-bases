import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter : {{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="restartCounter(0)">restart Counter</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  counter: number = 10;
  increaseBy(value: number) {
    this.counter += value;
  }
  restartCounter(value: number) {
    this.counter = value;
  }
}
