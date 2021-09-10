//1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1 ){
    console.log(numbers[index]);
}

//2
let numbersSum = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let indexSum = 0; indexSum < numbersSum.length; indexSum += 1 ){
    sum = sum + numbersSum[indexSum];
}
    console.log(sum);

//3
let numbersArray = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lenght = numbersArray.length;
let sumM = 0;
for (let indexM = 0; indexM < numbersArray.length; indexM += 1 ){
    sumM = sumM + numbersArray[indexM];
}
let result = sumM / lenght;  
console.log(result);
    
//4
if (result > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

//5
let higherNumber = Math.max.apply(null, numbersArray);
console.log(higherNumber);

//6
let counter = 0;
for (let indexOdd = 0; indexOdd < numbersArray.length; indexOdd += 1){
    if (numbersArray[indexOdd] % 2 === 0){
        counter = counter;
    } else{
        counter += 1;
    }
}
console.log(counter);

//7
let lowerNumber = Math.min.apply(null, numbersArray);
console.log(lowerNumber);

//8
let list = [];
for (let indexL = 1; indexL <= 25; indexL += 1 ){
    list.push(indexL);
}
console.log(list);

//9
let listResult = [];
for (let indexList = 0; indexList < 25; indexList += 1 ){
    listResult.push(list[indexList] / 2);
}
console.log(listResult);
