var algo = require('./arrindex.js');
var arrObj = [{name: 'b', id: 12}, {name: 'c', id: 21}, {name: 'a', id: 2}];
console.log(arrObj);
console.log(algo.quicksort.sortObj(arrObj, 'id', 'asc'));
console.log(algo.quicksort.sortObj(arrObj, 'id', 'desc'));

//output
//[{name: 'b', id: 12}, {name: 'c', id: 21}, {name: 'a', id: 2}]
//    [{name: 'a', id: 2}, {name: 'b', id: 12}, {name: 'c', id: 21}]
//    [{name: 'c', id: 21}, {name: 'b', id: 12}, {name: 'a', id: 2}]