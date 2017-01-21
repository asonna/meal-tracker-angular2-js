import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: "lowcalories",
  pure: false
})


export class LowcaloriesPipe implements PipeTransform {
  transform(input: Food[], desiredCaloriesLevel) {
    var output: Food[] = [];
    if(desiredCaloriesLevel === "highCalories") {
      for (var i=0; i < input.length; i++) {
        if (parseInt(input[i].details) >= 500) {
          document.write(input[i].details);
          input[i].low === false;
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCaloriesLevel === "lowCalories") {
      for (var i = 0; i < input.length; i++) {
        if (parseInt(input[i].details) < 500) {
          input[i].low === true;
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
