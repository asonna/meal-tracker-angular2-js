import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div>
      <div *ngIf="childSelectedFood">
        <h3>Edit Food</h3>
        <label>Enter Food Name:</label>
        <input [(ngModel)]="childSelectedFood.name">
        <label>Enter Food details:</label>
        <input [(ngModel)]="childSelectedFood.details">
        <label>Enter Food calories:</label>
        <input [(ngModel)]="childSelectedFood.calories">

        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
