// let check = false

// function palindromeCheck (word) {
//     for (let index = 0; index < word.length; index += 1) {
//         if(word[index] === word[(word.length -1) - index]) {
//         check = true;
//     }
// }
// console.log(check)
// }
// palindromeCheck('maçã')

let highestIndex = 0; 

function highestCheck (numbers) {
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[highestIndex] < numbers[index]) {
            highestIndex = index;
        }
    }
    console.log(highestIndex);      
}
highestCheck([2, 3, 6, 13, 10, 1]);