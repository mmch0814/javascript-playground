const value = 2;


if(value === 2) {
    const value = 0;
    console.log(value);
}

console.log(value);

const profile = {
    name: 'techsith',
    age: 2
};

//profileは定数なので、再代入はできない
// profile = {
//     name: 'techsith3',
//     age: 4
// };

//プロパティの取得
console.log(profile);

console.log(profile.name);
console.log(profile.age);

//プロパティの変更
profile.name = 'techsith2';
profile.age = 3;
//出力
console.log(profile);


//プロパティの追加
profile['gender'] = 'male';
//出力
console.log(profile);