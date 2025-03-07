const profile = { name: 'Ham', age:45};
const{ name, ...rest } = profile;
console.log(name);
console.log(rest);

//アロー関数
const printObject = (profaile) =>{
    //テンプレート文字列を使って出力
    console.log(`name: ${profile.name}`);
}
//printObject関数の実行
printObject(profile);

//nameだけ受け取りたい　→　オブジェクトの分割代入
//不必要なものを受け取ってしまうと、読みづらいし、把握にコストがかかる
const printObject2 = ({name}) => {
    console.log(`name:${name}`);
}
printObject2(profile);