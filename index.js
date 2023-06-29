//1. return the sum of all the positives ones

let arr=[1, 4, 5, 2, -5, 23, -12, 123, -9, 0]

let sum=0
     // ----- done with forEach
// let newArr=[]
// arr.forEach(el =>{
//     if(el > sum){
//         newArr.push(el)   
//     }
// })
// console.log(newArr)

// newArr.forEach(item => sum+=item)
// console.log(sum)

let newArr=arr.filter(item => item > sum)
console.log(newArr)

newArr.forEach(item => sum+=item)
console.log(sum)



//2. Abbreviate the name and return the name initials and move it to Upper Case

let str="nika kaxadze"

let splitted= str.split("")
splitted.splice(1,4)
splitted.splice(2)

let upper=splitted.map(item => item.toUpperCase())

console.log(upper)


//* Given an array of strings, remove the last character of each string

let str1=["nika","nika5","nika7","nika10"]

let sliced=str1.map(item => item.slice(0, -1))

console.log(sliced)

