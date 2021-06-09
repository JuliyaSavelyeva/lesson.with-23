// const sum = (a, b) => a + b;

const sum = a => b => a + b;

const add3 = sum(3);

const result = add3(5);

console.log(result);


// compose

const funcAdd3 = value => value + 3;
const mult2 = value => value * 2;
const div4 = value => value / 4;

const compose = (...funcs) => value => funcs.reduce((acc, func) => func(acc), value);

const doEverything = compose(funcAdd3, mult2, div4);
console.log(doEverything(3));

// caring

export const mult = a => b => a * b;

export const twice = (arg) => mult(2)(arg);

export const triple = (arg) => mult(3)(arg);


console.log(mult(5)(4));
console.log(twice(7));
console.log(triple(9));


