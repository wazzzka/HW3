/*
Створити скрипт який повинен виконувати наступне:

питаємо у користувача, що він хоче зробити (add, sub, mult, div);
питаємо у користувача перше число;
запитуємо у користувача друге число;
виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").
*/

let operation, num1, num2, addition, subtraction, multiplication, division;

// Перевіряємо, чи користувач ввів правильну операцію

while (operation = prompt("Що ви хочете зробити? (add(+), sub(-), mult(*), div(/))", '').toLowerCase()) {
    if (operation !== 'add' && operation !== 'sub' && operation !== 'mult' && operation !== 'div') {
        alert("Ви ввели невірну операцію, введіть коректну (add(+), sub(-), mult(*), div(/))");
        continue;
    }

    // Питаємо у користувача перше та друге число
    const num1 = parseFloat(prompt("Введіть перше число:"));
    const num2 = parseFloat(prompt("Введіть друге число:"));

    // Виконуємо відповідну операцію
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;



    (operation === 'add') && alert(`${num1} + ${num2} = ${addition}`);
    (operation === 'sub') && alert(`${num1} - ${num2} = ${subtraction}`);
    (operation === 'mult') && alert(`${num1} * ${num2} = ${multiplication}`);
    (operation === 'div' && num2 !== 0) && alert(`${num1} / ${num2} = ${division}`);
    (operation === 'div' && num2 === 0) && alert(`Ділення на 0 неможливе`);
}