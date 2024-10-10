/* given a string ,try to print no og occurences of each unuique charcter of a string */
/* *
* example javscript 
* j=1 a=1 v=1 s=1 s=1 r=1 r=1i=1 p=1 t=1

*
*
 */
/* how about we some how store frequency of each uniuque charcter. we need a mappibng based structure
* <key=>value object
* javscript 
 */
let Studentname = 'javascript';
let dumydata = {}
for (const element of Studentname) {
    if (dumydata[element]) {
        dumydata[element] += 1
    } else {
        dumydata[element] = 1;
    }
}
console.log(dumydata)