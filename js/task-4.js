/*Суммирование значений свойств объекта

Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму зарплаты работников и возвращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".*/

const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  const salaries = Object.values(employees);
  let totalSalary = 0;

  for (const salary of salaries) {
    totalSalary += salary;
  }

  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500

/*Код должен содержать функцию countTotalSalary

Ожидается что функция вернет 0 для пустого объекта

Ожидается что функция вернет 1 для объекта { a: 1 }

Ожидается что функция вернет 1000 для объекта 'developers'

Ожидается что функция вернет 500 для объекта 'supports'*/
