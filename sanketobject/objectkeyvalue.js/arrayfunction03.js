/* ****
* reduce is a higher order function avalibale for arrays 
* reduce also takes a function f as an argument,
* what reduce does it it one by one goes to every elmennt of the array,

* say the current element is array[1]
* reduce will pass this elemnet to the function f,and accumulate the result of fuether function calls 
* with this particular result.
 */
let dumyData = [12, 34, 5, 6, 34, 6, 7, 34];
function sumofVALUE(PREVIOUSVALUE, current) {
    console.log(PREVIOUSVALUE + current)
    return PREVIOUSVALUE + current
}
let data = dumyData.reduce(sumofVALUE)
console.log(data)





/* reduce  */
let ecommerceSector = [
    { price: 2000, productName: "iphone" },
    { price: 5000, productName: "dumydata" },
    { price: 30000, productName: "sampleApplication" }
]

function sampleApplication(pre, cuu) {
    console.log(pre, cuu)
    return { price: pre.price + cuu.price };
}

let data3 = ecommerceSector.reduce(sampleApplication);

console.log(data3.price);
