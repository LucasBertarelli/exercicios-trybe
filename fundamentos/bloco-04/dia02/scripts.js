// let numbers = [5, 9, 3, 19, 70, 13, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// let result = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     result += numbers[index];
// }
// console.log(result);

// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }
// let average = sum / numbers.length;
// console.log(average);

// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
// }

// let average = sum / numbers.length;

// if (average > 20) {
//     console.log('valor maior que 20');
// } else {
//     console.log('valor menor ou igual a 20');
// }

// let highestNumber = numbers[0];
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > highestNumber) {
//         highestNumber = numbers[index];
//     }
// }
// console.log(highestNumber);

// let oddCount = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         oddCount += 1;
//     }
// }
// if (oddCount === 0) {
//     console.log('nenhum valor impar encontrado');
// } else {
//     console.log(oddCount);
// }

// let lowestNumber = numbers[0];
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < lowestNumber) {
//         lowestNumber = numbers[index];
//     }
// }
// console.log(lowestNumber);

// let numbers = [];
// for (let index = 1; index <= 25; index += 1) {
//     numbers.push(index);
// }
// console.log(numbers);

let numbers = [];
let numbers2 = [];

for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
}
for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    numbers2.push((numbers[index2] / 2))
    }
console.log(numbers2);
