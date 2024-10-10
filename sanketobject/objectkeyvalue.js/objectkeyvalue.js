/* Object key value how many type are u do that */

// console.log(studentData)
// /* it will show only key */
// let data = Object.keys(studentData);
// console.log(data)
// /* it will show only value  */
// let dataValeu = Object.values(studentData);
// console.log(dataValeu);
// let da = Object.entries(studentData);
// console.log(da);

let studentData = {
    firstName: "sohil",
    lastName: "karan",
    rollnumber: 21,
    address: "odisha"
}
for (let key in studentData) {
    console.table(key,studentData[key]);           // logs the keys: firstName, lastName, rollnumber, address ,//sohil,karan 21,odisha
}
