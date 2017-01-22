import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: "lowcalories",
  pure: false
})

export class LowcaloriesPipe implements PipeTransform {
  transform(input: Food[], desiredCaloriesLevel) {
    var lowCalories: Food[] = [];
    var highCalories: Food[] = [];

    for (var i=0; i < input.length; i++) {
      if (input[i].calories >= 500) {
        highCalories.push(input[i]);
      }else {
        lowCalories.push(input[i]);
      }
    }

    if(desiredCaloriesLevel === "highCalories") {
      return highCalories;
    } else if (desiredCaloriesLevel === "lowCalories") {
      return lowCalories;
    } else {
      return input;
    }
  }
}
