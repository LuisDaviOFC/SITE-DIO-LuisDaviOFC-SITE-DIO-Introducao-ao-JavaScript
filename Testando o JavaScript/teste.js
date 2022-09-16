//var y = 0;
/*var y = 0;
var x = 1;*/

console.log("Hello world!");

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }else{
            console.log(`${array[i]} não é par`)
        }
    }
    console.log('Os numeros pares são: ', evenNums);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
returnEvenValues(array);