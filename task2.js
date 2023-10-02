// Допишіть код, щоб функція format(data, type) перевизначала себе залежно від параметра type:

function format(data, type) {
    // Ваш код
}

console.log(format("1", "number")); // 1
console.log(format("1")); // 1
console.log(typeof format()); // "number"

console.log(format("Hello", "boolean")); // true
console.log(format(1)); // true
console.log(typeof format()); // "boolean"

console.log(format(true, "string")); // "true"
console.log(format(1)); // "1"
console.log(typeof format()); // "string"
