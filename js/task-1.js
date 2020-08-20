/*CRUD для свойств объекта
-С - create(создать)
-R - read(читать)
-U - update(обновить)
-D - delete (удалить)

Напиши скрипт, который, для объекта user, последовательно:
1.добавляет поле 'mood' со значением 'happy'
2.добавляет поле 'full time' со значением true
3.заменяет значение 'hobby' на 'skydiving'
4.заменяет значение 'premium' на false
5.в переменную message записывает содержимое объекта user:
-для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
-с помощью оператора for...of
-в формате ключ: значение
-c переносом строки('\n')*/

let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line
user.mood = 'happy';
user['full time'] = true;
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
// Write code under this line
for (const key of keys) {
  message += `${key} : ${user[key]}\n`;
}

console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */

/*Ожидается что message содержит все cвойcтва и значения

Ожидается наличие значения 'happy' у свойства 'mood' объекта user

Ожидается наличие значения 'skydiving' у свойства 'hobby' объекта user

Ожидается наличие значения 'Mango' у свойства 'name' объекта user

Ожидается наличие значения 20 у свойства 'age' объекта user

Ожидается наличие значения true у свойства 'full time' объекта user

Ожидается наличие значения false у свойства 'premium' объекта user

Массив keys совпадает со всеми свойствами объекта

Ожидается использование метода 'Object.keys'

Ожидается использование метода 'for of'

Ожидается использование спецсимвола переноса строки '\n'*/
