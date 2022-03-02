var allTheNumbers = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7] ];

// MY SOLUTION 

// for (var i = 0; i < allTheNumbers.length; i++) {
//     for (var o = 0; o < allTheNumbers[0].length; o++)
//     console.log(allTheNumbers[i][o])
// }

// REAL ANSWER FIRST PART

// allTheNumbers.forEach(function(arr){
//     arr.forEach(function(num){
//         console.log(num)
//     })
// })

// REAL ANSWER WHOLE THING

var myArray = []
allTheNumbers.forEach(function(arr){
    myArray.push(arr.join(", "))
})

var myString = myArray.join(', ')
console.log(myString)
// document.write(myString)

