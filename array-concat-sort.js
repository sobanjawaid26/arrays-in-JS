arr1 = [1,2,3];
arr2 = [4,5,6];
arr3 = [7,8,9];
arr4 = arr1.concat(arr2,arr3);
console.log(arr4);

arr = [4,3,6,1,8,6,5];
console.log(arr);
arr.sort();
console.log(arr);

// custom sort function

function mySort(a,b){
    return a-b;
}

arrNew = [1,30,5];
console.log(arrNew);
arrNew.sort(mySort);
console.log(arrNew);

arrObj = [
    {name:'ajay', age:22},
    {name:'vijay', age:20}
]

function sortObject(obj1, obj2){
    return obj1.age - obj2.age;
}

console.log(arrObj);
arrObj.sort((a,b) => a.age-b.age);
console.log(arrObj);

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];

items.sort((a,b) => {var first = a.name.toUpperCase; var second = b.toUpperCase; return (first < second) ? -1 : (first > second)? 1: 0});

console.log(items);

