import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker Application for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>

    <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
    <hr>
    <div>
      <div *ngIf="selectedFood">
        <h3>{{selectedFood.name}}</h3>
        <p>Food Low in calories? {{selectedFood.low}}</p>
        <hr>
        <h3>Edit Food</h3>
        <label>Enter Food Name:</label>
        <input [(ngModel)]="selectedFood.name">
        <label>Enter Food details:</label>
        <input [(ngModel)]="selectedFood.details">
        <label>Enter Food calories:</label>
        <input [(ngModel)]="selectedFood.calorie">

        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
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

  // editFood(clickedFood) {
  //   this.selectedFood = clickedFood;
  // }
  //
  // finishedEditing() {
  //   this.selectedFood = null;
  // }
}

// export class Food {
//   public low: boolean = false;
//   constructor(public name: string, public details: string, public calories: number) { }
// }
