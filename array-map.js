const student_marks = [
    {name: "ajay", marks: 70},
    {name: "vijay", marks: 80}
];
student_marks.map(obj => obj.grade = obj.marks >= 80 ? true : false );
console.log(student_marks);

console.log([1,4,9].map(Math.sqrt));