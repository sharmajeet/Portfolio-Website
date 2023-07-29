// ------> filter is a function that is used to filter array and applay conditions and loops on array.<---------//
// const app = require('./app');
const array=[1,3,5,7,5,4,3,5,9];
// 1st 
array.filter((item1)=>{
    console.log(item1);
})
// 2nd
let result = array.filter((item)=>{
   return item === 3;
})
console.log(result)
// 3rd
let res = array.filter((item2)=>{
    return item2 >=4;
})
console.warn(res);