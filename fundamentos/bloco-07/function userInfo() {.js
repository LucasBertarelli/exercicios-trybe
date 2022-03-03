// function userInfo() {
//     const userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//   }
//   console.log(userEmail);
//   userInfo();

// if (true) {
//     // inicio do escopo do if
//     const userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20

// const userName = 'Isabella';
// const userName = 'Lucas';
// console.log(userName); // Resultado: Lucas

// const name = 'Claudia Coutinho Linhares';
// const adj = 'eu te amo, te adoro, te admiro';
// const adj2 = 'demais da cponta senhorrr';
// // console.log(`${name} ${adj} ${adj2}`)

// // Com o template literals
// console.log(`Primeira linha; 
// Segunda linha; 
// Terceira linha;`);

// Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// function sum (num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(2,2));

const sum = (num1, num2) => num1 + num2;

console.log(sum(2,2));