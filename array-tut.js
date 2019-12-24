// Given an array, write a function to check if all elements of that array are less than 100 or not.

var myArr = [200,140,290,800]

function AllGreaterThanHundred(ele){
    return ele < 100
}

function allDataTypeSame(ele, expectedDataType){
    return ele.sDatatype === expectedDataType;
}

function anyOneLess(element){
    return (element < 100);
}
function anyOneEven(element){
    return (element % 2 == 0);
}
// function lessThanHundred(arr){
//     for(i = 0;i< arr.length; i++){
//         if(arr[i] < 100)
//             return false;
//     }
//     return true;
// }

function lessThanHundred(arr){ 
    return arr.every(AllGreaterThanHundred); 
 }

console.log("lessThanHundred " + lessThanHundred(myArr));

function fnCheckDatatype_Every(arr, sDatatype){ 
    return arr.every(allDataTypeSame,sDatatype);
 } 

 console.log("fnCheckDatatype_Every " + fnCheckDatatype_Every(myArr, "number"));

 function ifAnyOneNumberLessThan100(arr){
     return arr.some(anyOneLess);
 }

 console.log("ifAnyOneNumberLessThan100 " + ifAnyOneNumberLessThan100(myArr));

 function ifAnyOneNumberIsEven(arr){
    return arr.some(anyOneEven);
 }

console.log( "ifAnyOneNumberIsEven " + ifAnyOneNumberIsEven(myArr));

 console.log("--------------------------------------");

 const myArray = [1,2,3,4,5,6,7,8];

 const even = (ele) => (ele % 2 == 0);

 console.log(myArray.some(even));

 console.log([1,2,3,4,5,6,7].every(x => x % 2 === 0 ));

 // if a value exists in an array
 // Checking whether a value exists using an arrow function


 console.log([1,2,3,4,5,6,7].some(x => x === 9));
