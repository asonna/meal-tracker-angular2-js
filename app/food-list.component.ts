import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allFoods">All Foods</option>
      <option value="lowcalories">Low Calories Foods</option>
      <option value="highCalories" selected="selected">High Calories Foods</option>
    </select><br><br>

    <ul>
      <li *ngFor="let currentFood of childFoodList | lowcalories:filterByLowcalories">
      Name:{{currentFood.name}}<button (click)="editButtonHasBeenClicked(currentFood)">Edit!</button><br>
      Calories: {{currentFood.calories}} <br>
      Details: {{currentFood.details}}<hr></li>
    </ul>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  filterByLowcalories: string = "highCalories";

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  isLow(clickedFood: Food) {
    if(clickedFood.low === true) {
      alert("This food is low in calories!");
    } else {
      alert("This food is high in calories. You may want to exercise some out!");
    }
  }

  onChange(optionFromMenu) {
    this.filterByLowcalories = optionFromMenu;
  }

}
