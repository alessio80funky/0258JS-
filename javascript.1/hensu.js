//変数
/*
変数はデータのいれものです。
変わる可能性があるデータを取り扱う。

変数はletで始まる。

特徴：再宣言できませんが、再代入できます。

*/
   //変数の宣言  　変数名　演算子　　値
        let       name1     =     "太郎";

        let age1 = 20;
        age1=21; //再代入が可能/再宣言が不可能

///出力コマンド
console.log(name1);
console.log(age1);

let a = 12;
a = 11;

console.log(a)



//定数

/*
定数もデータのいれものです。
変わらないデータを取り扱う。

定数はconstで始まる。

*/


   //定数の宣言  　変数名　　演算子　　値
        const      name2     =     "太郎";

        const age2 = 20;
 //     age2 = 21; //再代入が不可能/再宣言が不可能
///出力コマンド
console.log(name2);


///関数

//関数は処理のかたまりです。つまりデータを処理する処理機です。

let name3 = "alice";

function sayHello() {
    console.log("Hello " + name3);
}

//関数の呼び出し
sayHello();

/*
functionの後に関数名をつける。
function sayHello(引数　→　関数に渡すデータ) {

処理したい内容をかく
 console.log("Hello " + name3);

}

//関数の呼び出しを書く
sayHello();


*/

/* javascriptの記述方法　

1.キャメルケース　＝＞　lastName => 　変数名もしくは関数名に使われます

2.スネークケース　＝＞　last_name => 定数名に使われます

3.パスカルケース　＝＞　LastName => クラス名に使われます (classはオブジェクト指向プログラミングで使われるものです。今回は扱いません。)

4.ケバブケース　＝＞　last-name => HTMLのidやclassに使われます

*/

