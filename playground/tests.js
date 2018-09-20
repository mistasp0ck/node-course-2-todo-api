/*
 * Complete the function below.
 */
// function oddNumbers(l, r) {
//   var results = [];
//   var count = r - l;

//   console.log('there are ' + count + ' numbers between ' + l + ' and ' + r);
//   for (var i = 0 + 1; i <= count; i++) {
//     if (l & 1) {
//       results.push(l);
//     }
//     console.log(i);
//     l++;
//   }
//   return results;
// }


// var l = 3;
// var r = 10;

// console.log(oddNumbers(l, r));

// function main() {
//     // var n_temp = readLine().split(' ');
//     // var n = parseInt(n_temp[0]);
//     // var k = parseInt(n_temp[1]);
//     // a = readLine().split(' ');
//     // var a;
//     var k = 4;
//     var a = [1,2,3,4,5,6,7];
//     //gives array
//     // a = a.map(Number);
    
//     // move array with number k
//     for (var i = k - 1; i >= 0; i--) {
//       var temp = a.shift();
//       a.push(temp);
//       console.log(a);
//     }

//     return a;
// }

// main();
// var input = "0 0 0 100 63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33 "

// var input_temp = input.split('\n');

// input = input_temp[1].split(' ');

// input.sort( function(a, b){
//   return a - b;
//   }
// );

// console.log(input.join(' '));

var input = "20 \n" +
"0 ab \n" +
"6 cd \n" +
"0 ef \n" +
"6 gh \n" +
"4 ij \n" +
"0 ab \n" +
"6 cd \n" +
"0 ef \n" +
"6 gh \n" +
"0 ij \n" +
"4 that \n" +
"3 be \n" +
"0 to \n" +
"1 be \n" +
"5 question \n" +
"1 or \n" +
"2 not \n" +
"4 is \n" +
"2 to \n" +
"4 the";

var entries = input.split(' \n');

var l = parseInt(entries.shift());
var e_array = []; 

for (var i = 0; i <= entries.length; i++) {
  if (entries[i]) {
    e_array[i] = entries[i].split(' ');
  }
}

function compare(a, b) {
  if (a[0] > b[0]) {
    return 1;
  }
  if (a[0] < b[0]) {
    return -1;
  }
  return 0;
};

for (var i = 0; i <= l/2 - 1; i++) {
  if (e_array[i][1]) {
    e_array[i][1] = "-";
  }
}
 
e_array.forEach(function(item, index) {
  item.origOrder = index;
});  
  
e_array.sort(function(a, b) {
  var diff = a[0] - b[0];
  if (diff !== 0) {
    return diff;
  } else {
    return a.origOrder - b.origOrder;
  }
}); 

e_array.sort(compare);

var result = [];

for (var i = 0; i <= e_array.length - 1; i++) {
  if (e_array[i][1]) {
    result[i] = e_array[i][1];
  }
}

console.log(result.join(' '));


// var input_temp = input.split('/n');

// input = input_temp[1].split(' ');
// var results = [];

// for (var i = 0; i <= input_temp[0]; i++) {
//   var count = 0;
//   for(let j = 0; j <= input.length; j++) {
//     if (input[j] == i) {
//       count++;
//     } 
//   }
//   console.log('number ' + i + 'found ' + count + 'times');
//   results.splice(i, 0, count);
// }

// console.log(results.join(' '));
// var number = 0;
// var countDuplicates = function (input) {
//   var count = input.filter((number) => number === 0);
//   console.log(count);
//   if (count.length > 0 ) {
//     return count;
//   }

// };

// console.log('there are ' + countDuplicates(input)) + 'instances of the number' + number;

