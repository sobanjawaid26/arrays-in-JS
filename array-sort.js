var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compare(a,b){
    return a-b;
}

console.log(numberArray.sort(compare));
console.log(stringArray.sort(compare));
console.log(numericStringArray.sort(compare));
console.log(mixedNumericArray.sort(compare));
console.log('----------------------------');
console.log(numberArray.reverse());
console.log(stringArray.reverse());
console.log(numericStringArray.reverse());
console.log(mixedNumericArray.reverse());
