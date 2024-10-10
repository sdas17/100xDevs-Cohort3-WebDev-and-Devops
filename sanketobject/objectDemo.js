let x = {
    Studentname: "sanket",
    age: 23
}
/* acess object */
//Note:from key u acess value  but value u can't acess key
console.log(x["Studentname"]); // Output: "sanket"
console.log(x.Studentname); //Output:"sanket"
/* object is mutable is yes  */
x.Studentname = 'karan'; //update object is js
console.log(x)

/* ***
*
how to add a new propert to alredy create object


*/
x.marks = 1000;
x["company"] = "miracele software system"
console.log(x)
/* delet a key value pair 
we can delte proprty
*/
delete x.Studentname
console.log(x)