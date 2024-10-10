/* *
*  filter is one highrer order function filter is loop over they array thier is one special thing filter they argument of passes of alway return boolan output is conveted boolan
*  filter loop orver every element ,passes that element in the argument function and then if they output of the this function call is trye,then it store original element in a enw array otherwise doesn't ad this add eleent to the array 
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
 */
let array = [1, 2, 3, 4, 56, 7, 7, 8, 4];
function isOddEVENT(num) {
    return num % 2 == 0
}
let data = array.filter(isOddEVENT);
console.log(data)