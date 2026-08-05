let miArreglo: (number | string)[] = ['1',2,3,4,5,"6"];
// miArreglo.forEach( number => {
//     console.log(number + 10);
    
// })
console.log(miArreglo);

let myArray: number[] = [1,2,3,4,5,6]
let myArray2 = [ ...myArray ]
let myArreglo3 = structuredClone(myArray)

myArray2.push(7)

console.log({ myArray, myArray2 })