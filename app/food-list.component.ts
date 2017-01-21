import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <ul>
  <li (click)="isLow(currentFood)" *ngFor="let currentFood of foods">
  Name:{{currentFood.name}}<button (click)="editButtonHasBeenClicked(currentFood)">Edit!</button><br>
  Calories: {{currentFood.calories}} <br>
  Details: {{currentFood.details}}<hr></li>
  </ul>
  `
})

export class FoodListComponent {
  foods: Food[] = [
    new Food('Hamburger', "Didn't get a soda or cheese on my burger!", 354),
    new Food('Fries', 'I only ate half of them.', 365)
  ];
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  isLow(clickedFood: Food) {
    if(clickedFood.low === true) {
      alert("This food is low in calories!");
    } else {
      alert("This food is high in calories. Better get to work!");
    }
  }

  calories(currentFood){
    if (currentFood.calories >= 500){
      return "bg-danger";
    } else if (currentFood.calories === 500) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
