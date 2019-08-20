/**
 * Bubble sort
 */

function bubbleSort(arr) {
    let counter = 0;
     for (let len = arr.length, i = len; i > 0; i--) {
         for (let j = 0, temp; j < i; j++) {
             if (arr[j] > arr[j + 1]) {
                 temp = arr[j];
                 arr[j] = arr[j+1];
                 arr[j+1] = temp;
             }
             counter++;
         }
     }
     console.log(counter);
     return arr;
};

function selectionSort(arr) {
   let counter = 0;

   for (let i = 0, len = arr.length; i < len - 1; i++) {
       let min = i;

       for (let j = i; j < len; j++) {
           if (arr[min] > arr[j]) {
               min = j;
           }
           counter++;
       }

       if (i !== min) {
           let temp = arr[i];
           arr[i] = arr[min];
           arr[min] = temp;
       }
   }
   console.log(counter);
   return arr;
};

// let sorted = quickSort([3,5,1,8,3]);
function quickSort(arr) {
   if (arr.length < 2) { return arr; }

   let len = arr.length;
   let a = [];
   let b = [];
   let pivot = Math.floor(len / 2);

   for (let i = 0; i < len; i++) {
       if (arr[i] < arr[pivot]) {
           a.push(arr[i]);
       } else if (i !== pivot) {
           b.push(arr[i]);
       }
   }
   return quickSort(a).concat(arr[pivot], quickSort(b));
};