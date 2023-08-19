/*Створити скрипт який повинен виконувати наступне:

    питаємо у користувача, що він хоче зробити (add, sub, mult, div);
питаємо у користувача перше число;
запитуємо у користувача друге число;
виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").*/
let question = prompt(`Що ти хочеi зробити (+, -, *, /)`);
let number1 = prompt(`Питаємо у користувача перше число`, 'Введіть перше число');
let number2 = prompt(`Питаємо у користувача друге число`, 'Введіть друге число');

let result = 0;

switch (question) {
    case "+":
        result = Number(number1) + Number(number2);
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        result = number1 / number2;
        break;
    default:
        break;
}

alert(`${number1}${question}${number2}=${result}`);