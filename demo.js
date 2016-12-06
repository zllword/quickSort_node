var algo = require('./arrindexone.js');
var arr = [23, 12, 11, 43, 54, 43, 2, 12, 66];
console.log(arr);
console.log(algo.quicksort.sort(arr));
console.log(algo.quicksort.sort(arr, 'desc'));

//output
//[ 23, 12, 11, 43, 54, 43, 2, 12, 66 ]
//[ 2, 11, 12, 12, 23, 43, 43, 54, 66 ]
//[ 66, 54, 43, 43, 23, 12, 12, 11, 2 ]
