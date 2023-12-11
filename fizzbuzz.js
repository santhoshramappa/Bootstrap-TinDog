// let i = 0;
// for (i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i);
//     }
// }

var fizarray = [];
let i = 1;
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizarray.push("FizzBuzz");
    } else if (i % 3 === 0) {
        fizarray.push("Fizz");
    } else if (i % 5 === 0) {
        fizarray.push("Buzz");
    } else {
        fizarray.push(i);
    }
}
console.log(fizarray);


let count = 99;
while (count >= 1) {
    console.log(`${count} bottles of beer on the wall, ${count} bottles of beer,`)
    console.log(`Take one down and pass it around, ${count - 1} bottles of beer on the wall\n`)
    count = count - 1;
}
console.log(" ");

