/*Поиск наибольшего значения среди свойств объекта

Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".*/

const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const names = Object.keys(employees);
  let maxNumberOfTasks = 0;
  let bestEmployee = '';
  for (const name of names) {
    if (employees[name] > maxNumberOfTasks) {
      maxNumberOfTasks = employees[name];
      bestEmployee = name;
    }
  }
  return bestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

/*Ожидается что findBestEmployee является функцией

Ожидается что функция вернет пустую строку для пустого объекта

Ожидается что функция вернет 'a' для объекта { a: 1 }

Ожидается что функция вернет 'lorence' для объекта 'developers'

Ожидается что функция вернет 'mango' для объекта 'supports'

Ожидается что функция вернет 'lux' для объекта 'sellers'*/
