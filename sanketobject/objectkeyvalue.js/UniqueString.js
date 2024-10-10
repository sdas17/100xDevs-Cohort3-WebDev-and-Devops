/* given an array of string ,print all the unqiue string in the arry */
/*  let data ['abc','hellow',"c","d","abc","c","d"] */
/* abc hello c d */
let data = ['abc', 'hellow', "c", "d", "abc", "c", "d"];
let dumydata = {};
for (const element of data) {
    console.log()
    if (!dumydata[element]) {
        dumydata[element] = true
    }
}
for (const element in dumydata) {
    console.log(element)
}

/* **
* map function 
*
*
*higher order function
these are functions that depends  and operatore on other function higher function .
highter order function take another function as an argument and then execture logic
* function gun(){} function fun(gun){ gun () } ====>highter order function
* logic or return a function as arugment 
*
 */

/* *
* map function 
* map is a higher order function avaliable with array 

* it takes a fucntion as an argument ->f
* it return an aray in which every value is actually populated by calling functio f with original array element as argument
* function f with original array element as argument
* every element of the original array is passes one by one in the argument function f 
* what every is out put for each individual element,we populated that out in array 
* map internally interates/loop over every element of the given original aray pass that element in the argument function f and then store the returned value inside an aray
* */

let arr = [1, 2, 3, 4, 5];
function square(res) {
    return res * res
}
function isoddevent(num) {
    if (num % 2 == 0) {
        return "even"
    } else {
        return "odd"

    }
}
const result = arr.map(square);
console.log(result)

const oddEvent = arr.map(isoddevent);
console.log(oddEvent)
/* how we use map operation in js ??????????????????????
/*
*  in any situation when we have to do an operation on every element of they array and store the result of each operion
 map can be a good option
* for example
 array of product objects.
*
*


* if the function that we are passing in map takes two arguments 
* then first argument will be accessing the actual value
* secound argument will be acesing index of that value
*
*
*
*/
let newArray = [9, 8, 7, 6, 4];

function print(element, index) {
    return `Element at index ${index} is ${element}`
}

const result2 = newArray.map(print);
console.log(result2)



/* makeing custom map function */
function customFunction(arr, print) {
    let sampleararay = [];
    for (let index = 0; index < arr.length; index++) {
        sampleararay.push(print(arr[index], index))
    }
    return sampleararay;
}
/*  custom mapper functionclaity 
*
*
*
*
*
*
8
****** */
let samplearay = customFunction(newArray, print)
console.log(samplearay)