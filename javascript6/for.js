//for文

/* 

for (初期化; 条件式; 更新[++]) {
  実行したいものをここにいれる
}

*/

for (let i = 1; i < 5; i++) {
    console.log("iの値は" , i );
}

///注意点

//無限ループ
/*
//無限ループ①

for (let i= 0; i < 5; i--){
    console.log("iの値は" , i );
}

//無限ループ①

for (let i= 0; i < 5; ){
    console.log("iの値は" , i );
}

for (; ;){
    console.log("iの値は" , i );
}
*/
//少数を指定しない

for (let j = 0.1; j < 5; j += 0.1) {
    console.log("jの値は" , j );
}

//for文の中でif文を使うこともできる (推奨されないが、使うことはできる)

for (let k = 0; k < 5; k++) {
    if (k % 2 === 0) {
        k++;
    } 
    console.log("kの値は" , k );
}


//for文の補足(for文の中で複数の変数を使うことができる
/*

for(let z = 0, w = 1; z < 5; z++, w++){
    console.log("zの値は" , z );
    console.log("wの値は" , w );
}

for(let z = 0, w = 1; z < 5 && w < 6; z++, w++){
    console.log("zの値は" , z );
    console.log("wの値は" , w );
}

*/

//for...in文(オブジェクトにしか使わない)
//オブジェクトのプロパティを列挙するための構文
const user = {
    name: "John",
    age: 30,
    city: "New York"
};

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

//for...of文(配列にしか使わない)
//配列の要素を列挙するための構文
const fruits = ["apple", "banana", "cherry"];

for (const str of fruits) {
    console.log(str);
}

