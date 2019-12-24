'use strict';
const student_marks = [
    {name: "ajay", marks: 70},
    {name: "vijay", marks: 80}
];

// function reducer(acc,ele){
//     return acc + ele;
// }

let reducer = (acc, curr) => acc + curr;

console.log(student_marks.reduce(reducer));

console.log([0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue, 10 ))

var sum = [
    {name: "ajay", marks: 70},
    {name: "vijay", marks: 80}
].reduce((acc, curr) => acc + curr.marks, 0)
console.log(sum);

// console.log([].concat([1,2]).concat([3,4]));

// flattening an array

var twoDArr = [[1,2],[3,4],[5,6]];

console.log(twoDArr.reduce((acc, curr) => acc.concat(curr), []));

// to determine the number of times a name has been used

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

 let countedNames = names.reduce((allnames, name) => {
    if (name in allnames){
        allnames[name]++}
    else {
        allnames[name] = 1}
    return allnames;
    },{});

console.log(countedNames);

// Grouping objects by a property

// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }

let people = [
    {name:'abc', age: 21},
    {name:'def', age: 22},
    {name:'ghi', age: 22}
]

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }
  
let groupedPeople = groupBy(people, 'age')

console.log(groupedPeople);