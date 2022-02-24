console.log("Odd and even numbers");

console.log("Odd numbers looped from 1 to 100 through a for loop")
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 1){
        console.log(i);
    }
}

console.log("Odd numbers looped from 1 to 100 through a while loop")
var number1 = 1;
while (number1 !== 101) {
    if (number1 % 2 === 1){
    console.log(number1);
    }
    number1++;
}

console.log("Even numbers looped from 1 to 100 through a for loop")
for (var ii = 1; ii <= 100; ii++) {
    if (ii % 2 === 0){
        console.log(ii);
    }
}

console.log("Even numbers looped from 1 to 100 through a while loop")
var number2 = 1;
while (number2 !== 101) {
    if (number2 % 2 === 0){
    console.log(number2);
    }
    number2++;
}