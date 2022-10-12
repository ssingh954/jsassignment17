/* Q5. What are the different ways of iterating through an array demonstrate them?
Ans:
1. Using for loop
*/
var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13}
];

for(let i = 0; i < myArray.length; i++){
    console.log("Using for loop === " +myArray[i].name);
}
console.log("\n");


/*
2. for/of Loop
*/
var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13}
];

for (let profile of myArray) {
    console.log("for/of Loop === " +profile.name)
}
console.log("\n");


/*
3. Using forEach. 
*/
var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13}
];

myArray.forEach(function(profile, index, myArr) {
    console.log("forEach === " +`Index: ${index}, Name: ${profile.name}`);
});
console.log("\n");


/*
4. Using while Loop
*/
var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13}
];

var i = 0;
while(i < myArray.length) {
    console.log("while Loop === "+myArray[i].name)
    i++
}
console.log("\n");


/*
5. Using map. 
*/
var myArray = [
    {id: 1, firstName: 'John', lastName: 'Smith', age: 12},
    {id: 2, firstName: 'Jane', lastName: 'Brown', age: 14},
    {id: 3, firstName: 'Martin', lastName: 'Johnson', age: 13}
];

var newArray = myArray.map(function(profile, index, myArr) {
    var newProfile = {
        'id': index + 1,
        'fullName': profile.firstName + ' ' + profile.lastName,
        'age': profile.age
    }

    return newProfile
})

newArray.forEach(function(profile, index, myArr) {
    console.log("Map === "+ profile.fullName)
});
console.log("\n");
