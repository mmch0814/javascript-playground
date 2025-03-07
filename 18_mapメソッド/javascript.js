const numbers = [5,3,4];

const square = (number) => {
    return number * number;
}

//上記の式を1行で書くと
// const square = (number) => number * number;

console.log(square(5));
//25


//関数を引数として渡す
const squares = numbers.map(square);

console.log(squares);
// [25, 9, 16]