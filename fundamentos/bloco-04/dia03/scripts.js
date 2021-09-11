// const a = 7;
// const b = 10;
// const c = 12;

// if (a > b && a > c) {
//     console.log('A, ' + a + ', é o maior número.');
// }else if (b > a && b > c) {
//     console.log('B, ' + b + ', é o maior número.');
// } else {
//     console.log('C, ' + c + ', é o maior número');
// }

// const d = -5;

// if (d > 0) {
//     console.log('positive');
// } else if (d < 0) {
//     console.log('negative');
// } else {
//     console.log(0)
// }

// const a = 30
// const b = 50
// const c = -100

// if (a < 0 || b < 0 || c < 0) {
//     console.log('angulo invalido');
// } else if (a + b + c === 180) {
//     console.log('true');
// } else if (a + b + c !== 180) {
//     console.log('false');

// let a = 50;

// if (a < 0 || a > 100) {
//     a = 'nota inválida';
// } else if (a >= 90) {
//     a = 'A';
// } else if (a >= 80) {
//     a = 'B';
// } else if (a >= 70) {
//     a = 'C';
// } else if (a >= 60) {
//     a = 'D';
// } else if (a >= 50) {
//     a = 'E';
// } else {
//     a = 'F'
// }
// console.log(a)

// a = 1
// b = 5
// c = 7
// let oneOrMoreIsEven = false;

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//     oneOrMoreIsEven = true;
// }
// console.log(oneOrMoreIsEven);

const cost = 100;
const salePrice = 200;

if (cost >= 0 && salePrice >= 0) {
    let totalCost = cost * 1.2;
    let profit = salePrice - totalCost;
    let totalProfit = profit * 1000
    console.log(totalProfit);
} else {
    console.log('valores negativos');
}
