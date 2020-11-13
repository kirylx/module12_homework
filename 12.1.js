// TODO : Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

// Method 1
console.log("\nMethod 1:");
(function (obj = { key1: "value1", key2: "value2" }) {
    for (let key in obj) {
        obj.hasOwnProperty(key) ? console.log(`${key} : ${obj[key]}`) : null;
    }
})();

// Method 2
console.log("\nMethod 2:");
(function (obj = { key1: "value1", key2: "value2" }) {
    Object.getOwnPropertyNames(obj).forEach((key) =>
        console.log(`${key} : ${obj[key]}`)
    );
})();
