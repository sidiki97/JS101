


// function swap(arr, xp, yp)
// {
//     var temp = arr[xp];
//     arr[xp] = arr[yp];
//     arr[yp] = temp;
// }
 
// // An optimized version of Bubble Sort
// function bubbleSort( arr, n)
// {
// var i, j;
// for (i = 0; i < n-1; i++)
// {
//     for (j = 0; j < n-i-1; j++)
//     {
//         if (arr[j] > arr[j+1])
//         {
//         swap(arr,j,j+1);
         
//         }
//     }
 
// }

// }

// let nums = [1, 8, 2, 9];

// bubbleSort(nums, nums.length);
// console.log(nums);

// function bubble(nums, n) {

//   for (let i = 0; i < n - 1; i++) {

//     for (let j = 0; j < n - i - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         let temp = nums[j];
//         nums[j] = nums[j+1];
//         nums[j+1] = temp;
//       }
//     }

//   }

// }

// let dum = [9, 8, 2, 5, 6, 3]
// bubble(dum, 6);
// console.log(dum);

class Rectangle {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(weight) {
    this.weight = weight;
  }
}

let rect = new Rectangle(10, 150);

console.log(rect.getWeight());



class Time {
  #hour = 0
  #minute = 0
  #second = 0
  constructor(hour, minute, second) {
      this.#hour = hour
      this.#minute = minute
      this.#second = second
  }
  //...
}

let time = new Time(7, 27, 30);

// console.log(time.#hour);

