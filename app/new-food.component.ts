import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h1>New Food Record</h1>
    <form>
      <div>
        <label>Enter Food Name:</label>
        <input #newName>
      </div>
      <div>
        <label>Enter Food Details:</label>
        <input #newDetails>
      </div>
      <div>
        <label>Enter Food Calories:</label>
        <input #newCalories>
      </div>
      <button (click)="submitForm(newName.value, newDetails.value, newCalories.value ); newName.value=''; newDetails.value=''; newCalories.value=''; ">Add Food</button>
    </form>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newFoodToAdd: Food = new Food(name, details, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
