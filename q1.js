//Q1. Create a function to iterate over the following list 

const name1 = ["John","Rohn", "Danny", "James"];
let txt = "";
name1.forEach(myFunction);

function myFunction(value) {
  txt += value + "\r\n";
}
console.log(txt);