// let n = 5;
// let line = ''
// let symbol = '*'

// for (let index = 0; index < n; index += 1) {
//     line = line + symbol;
// }

// for (let index = 0; index < n; index += 1) {
//     console.log(line);
// }

// let base = 5;
// let line = '';
// let symbol = '*'

// for (let index = 0; index < base; index += 1) {
//     line = line + symbol;
//     console.log(line);
// }

// let base = 5;
// let line = '';
// let symbol = '*';
// let commonPosition = base;

// for (let lineIndex = 0; lineIndex <= base; lineIndex += 1) {
//     for (let columnIndex = 0; columnIndex < base; columnIndex += 1) {
//         if (columnIndex < commonPosition){
//         line = line + ' ';
//         } else {
//         line = line + symbol
//         }
//     }
//     console.log(line);
//     line = ' ';
//     commonPosition -= 1;

let base = 5;
let line = '';
let symbol = '*';
let commonPosition = (base + 1) / 2;
let leftControl = commonPosition;
let rightControl = commonPosition;

for (let lineIndex = 0; lineIndex <= commonPosition; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= base; columnIndex += 1) {
        if (columnIndex > leftControl && columnIndex < rightControl) {
        line = line + symbol;
        } else {
        line = line + ' ';
        }
    }
    console.log(line);
    line = ' ';
    rightControl += 1;
    leftControl -= 1;
}