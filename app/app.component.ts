import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker Application on {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>

    <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
    <hr>
    <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>
    <new-food (newFoodSender)="addFood($event)"></new-food>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular2 Code Review';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedFood = null;

  masterFoodList: Food[] = [
    new Food('Hamburger', 'Did not get a soda or cheese on my burger!', 354),
    new Food('Fries', 'I only ate half of them.', 365)
  ];

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
}
