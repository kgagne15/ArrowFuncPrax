//refactor the below code using two arrow functions in one-line

// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

const double = (arr) => arr.map((val) => val * 2); 

//refactor all functions with arrow functions

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
// }

const squareAndFindEvens = (numbers) => {
    var squares = numbers.map((num) => {
        return num ** 2; 
    });
    var evens = squares.filter((square) => {
        return square % 2 === 0; 
    });
    return evens; 
}

//used the solution for help getting it on one line
const squareAndFindEvensOneLine = (numbers) => numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);