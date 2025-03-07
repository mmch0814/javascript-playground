const nickname = 'Ham';
const age = 45;

console.log(nickname);
console.log(age);

// "I am Ham, 45 years old."
console.log('I am '+ nickname + ', ' + age +  ' years old');



//※推奨　テンプレート文字列の利用（誤：`ではなく、'が使われている）
console.log('I am ${nickname}, ${age} years old.');

//※推奨　テンプレート文字列の利用（正）
console.log(`I am ${nickname}, ${age} years old.`);

//下記、どちらも同じ意味。呼び方が違うだけ。
//backquote , backtich

//'' と `` の違いに注意。
