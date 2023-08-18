let number1 = prompt(`Введіть перше число`, `Ввод числа першого `);
let number2 = prompt(`Введіть друге число`, `Ввод числа другого`);

number1 = Number(number1);
number2 = Number(number2);

let x = number1 + number2;
let y = number1 - number2;
let z = number1 * number2;
let a = number1 / number2;

alert(`Користувач ввів ${number1} і ${number2}:\n${number1}+${number2}=${x}\n${number1}-${number2}=${y}\n${number1}*${number2}=${z}\n${number1}/${number2}=${a}`);