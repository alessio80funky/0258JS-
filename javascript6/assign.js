///分割代入

//分割代入は配列やオブジェクトの中身を、もっとシンプルに取り出すためのテクニックです。

// 1. 配列の分割代入    

let colors = ["red", "blue", "green"];

//従来の書き方
let red = colors[0];
let blue = colors[1];
let green = colors[2];

console.log(red, blue, green);
console.log(red);

//分割代入の書き方
let [red2, blue2, green2] = colors;

console.log(red2, blue2, green2);
console.log(red);

//...other

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let [one, two, three, ...other] = data;

console.log(one, two, three);
console.log(...other);

// 2. オブジェクトの分割代入

let person = {
    name: "John",   
    age: 30,
    country: "USA"
}

//従来の書き方
let name = person.name;
let age = person.age;
let country = person.country;

console.log(name, age, country);

//分割代入の書き方
let { name: name2, age: age2, country: country2 } = person; //オブジェクトのプロパティ名と同じ変数名を使う必要がある

console.log(name2, age2, country2);