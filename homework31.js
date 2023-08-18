/*ДЗ 3. Математичні операції
Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
  Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
Користувач ввів 2 і 2:
2+2=4
2-2=0
2*2=4
2/2=1
 */

let number1 = prompt(`Введіть перше число`, `Ввод числа першого `);
let number2 = prompt(`Введіть друге число`, `Ввод числа другого`);

number1 = Number(number1);
number2 = Number(number2);

let x = number1 + number2;
let y = number1 - number2;
let z = number1 * number2;
let a = number1 / number2;

alert(`Користувач ввів ${number1} і ${number2}:\n${number1}+${number2}=${x}\n${number1}-${number2}=${y}\n${number1}*${number2}=${z}\n${number1}/${number2}=${a}`);