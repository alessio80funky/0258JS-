///データ型に関しての注意

//ストリング型・ナンバー型を計算するときに注意

let num = "abc" * 3;
console.log(num);//NaN (Not a Number) 文字列と数値を一緒に計算できません。



//ストリング型に関しての注意

name = "\"luigi\""; //シングルクォーテーションの中にシングルクォーテーション使えない
console.log(name);//ダブルクォーテーションの中にダブルクォーテーション使えない
//もしどうしても使いたい場合はエスケープシーケンスをつかいます。

//バッククォーテーションに関して

let code = 1234693878288;

let word = `code:${code}`;//テンプレート文字列

console.log(typeof word);
console.log(typeof code);

console.log("java" + "script");
console.log("java" + 10);


let a = "java";
let b = 10;

console.log(typeof a + typeof b);

console.log(10 + 10 + "java" + 10 + 10);


//配列に関しての補足

//配列は順番にデータを管理する箱です。
        //     0         1         2
let fruit = ["apple", "banana", "orange"];//インデックス番号

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);


//配列のネスト 　（注意　ー＞２段階まで書くことが基本ですそれ以上書くと解読性が下がります）

let user = [
   //  0  
    ["taro" , 20],//０番目

    ["hanako", 25]
]

console.log(user[0]);
console.log(user[0][0], user[1][0]);

