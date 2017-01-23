import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allFoods" selected="selected">Show All Foods</option>
      <option value="lowCalories">Show Low Calories Foods</option>
      <option value="highCalories">Show High Calories Foods</option>
    </select><br><br>

    <ul>
      <li *ngFor="let currentFood of childFoodList | lowcalories:filterByLowcalories">
      Name:{{currentFood.name}} <button (click)="editButtonHasBeenClicked(currentFood)" class="btn btn-primary btn-spacer">Edit!</button><br>
      Calories: {{currentFood.calories}}<br>
      Details: {{currentFood.details}}<hr></li>
    </ul>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  filterByLowcalories: string = "allFoods";

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  onChange(optionFromMenu: string) {
    this.filterByLowcalories = optionFromMenu;
  }

  toggleDone(clickedFood: Food, setLowcalories: boolean) {
     clickedFood.low = setLowcalories;
   }

}
