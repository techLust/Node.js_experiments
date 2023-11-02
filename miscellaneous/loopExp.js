const fs = require('fs');

const arr = ['a', 'b', 'c'];
const obj = { d: '1', e:'2', f: '3'};

// for(item in arr) console.log(item); //Gives index of array
// for(item of arr) console.log(item); //Gives element of array

for(item in obj) console.log(obj[item]);
console.log(obj.d)
