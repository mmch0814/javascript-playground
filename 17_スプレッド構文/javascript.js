const numbers = [1,2,3];
const integers = [4,5,6];

//非推奨（直観的でなく、constを覚えないといけないので）
console.log(numbers.concat(integers));

//スプレッド構文（配列）
//直観的だし見やすい。
console.log([...numbers,...integers]);

//---------
const profile1 = { name :'ham' };
const profile2 = { age : 45 };

//※非推奨　複数のオブジェクトをマージ
const profile = Object.assign(profile1, profile2);
console.log(profile);

//profile1は、Object.assignで合成され、破壊されている
//元のデータを参照できない
//profile1を見ている機能にも影響を及ぼしてしまう
console.log(profile1);
console.log(profile2);

//回避方法（ⅰ）　※芸がないので非推奨。
//Object.assignの第一引数に、{}を設定。
//そうすることで、profile1は第二引数となり、原型が保てる。

const profile_1 = { name :'ham' };
const profile_2 = { age : 45 };

const profile_ = Object.assign({}, profile_1, profile_2);
console.log(profile_);
console.log(profile_1);
console.log(profile_2);

//----------------結論----------------
//回避方法（ⅱ）
//スプレッド構文（オブジェクト） よく使われる
//{}の中で、オブジェクトの情報が展開される
const profile00 ={ ...profile_1, ...profile_2 };
console.log(profile00);
console.log(profile_1);
console.log(profile_2);


