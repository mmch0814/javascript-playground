
//通常の関数
function area (length){
    return length * length;
};

console.log(area(5));


//アロー関数
const area2 = (length) => {
    return length * 2;
};

//area2の引数が10なので、20が表示される
console.log(area2(10));

//area2の中身そのものが表示される
console.log(area2);

//------------------------------------------------

//通常の関数でも同様

function foo (){
    return true;
}

//出力結果：true
console.log(foo());

//関数の中身をそのまま表示
console.log(foo);


//関数を実行すれば、その値の実行結果が得られる
//関数の名称のみ記載すると、その関数の定義が得られる。

//関数を実行しているのか、関数の定義を表示しているのか、
//しっかり区別できるようにしておくこと。