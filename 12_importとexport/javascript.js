
//profile.jsのデータを利用するためにimportを使う
import aaa, { name , age } from './profile.js';
console.log(name);
console.log(age);

//空のオブジェクトをimportする
import obj from './profile.js';
console.log(obj);

//importしたオブジェクトのプロパティを変更する
obj.name = 'techsith2';
console.log(obj);

//importしたオブジェクトにプロパティを追加する
obj['gender'] = 'male';
console.log(obj);

//importしたオブジェクトのプロパティを削除する
delete obj.age;
console.log(obj);

//importしたオブジェクトにプロパティを追加し、プロパティの型を確認する
//obj.hobby = ['reading', 'cooking'];
//console.log(typeof obj.hobby);
