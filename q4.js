//Q4. two arrays find which two elements match using iterators
var arr = ["a", "b", "c", "d"];
var args = ["e", "f", "g", "h", "a", "i", "j"];

var result = arr.filter(function(element) {
    return args.indexOf(element) > -1;
});
console.log(result);