const student_marks = [
    {name: "ajay", marks: 70},
    {name: "bijay", marks: 75}
]

console.log(student_marks.filter(function(ele){
    return (ele.marks < 75);
}));

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function queryFromFruits(arr, query){
    return arr.filter(function(ele){
        return ele.toLowerCase().indexOf(query) !== -1;
    });
}

console.log(queryFromFruits(fruits, 'ap'));

// Affecting Initial Array (modifying, appending and deleting)

var myArr = ['asads','sdsaa','dsdss','sadghf','fdght'];
