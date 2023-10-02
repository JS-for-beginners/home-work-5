// Допишіть код, щоб функція format(data, type) перевизначала себе залежно від параметра type:

function format(data, type) {
    // Ваш код
}

var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"
