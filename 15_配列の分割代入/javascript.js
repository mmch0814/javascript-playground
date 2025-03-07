const array = ['Ham', 45];
const nickname = array[0];
const age = array[1];
console.log(nickname);
console.log(array[1]);
console.log(age);

//0番目とか1番目とか原始的で面倒。間違えるリスクもある。
//そこで分割代入を活用。

console.log("下は分割代入を使って表示")

const array2 = ['Ham', 45];
//一つの式で、変数を宣言。
//Ham：nickname2という変数に代入
//45：age2という変数に代入
const[nickname2, age2]= array2;

console.log(nickname2);
console.log(age2);

const array3 = ['Ham', 45, 'EggPlants', 'Oranges'];

// rest：残余要素
// ...：残余演算子、残余オペレータ、rest operator
const [nickname3, age3, ...rest] = array3;

console.log(nickname3);
console.log(age3);
console.log(rest);