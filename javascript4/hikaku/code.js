///比較演算子

//評価型「===, !== , ==, !=」

/**
 * == ->  大体同じ
 * === ->  完全に同じ [実務]
 * != -> 大体違う
 * !== ->  完全に違う [実務]
 */

let x = 0 == false;
console.log(x);//true

let y = 0 === false;
console.log(y);//false

let j = 0 != false;
console.log(j);//false

let k = 0 !== false;
console.log(k);//true


//大小型「 <, >, <=, >=」

//number

a = 2 > 10;  //false
b = 1 < 20; //true

c = 18;
d = 21;
console.log(c <= 20);//true 20を含めて20以下の数字がtrue
console.log(d <= 20);//false

e = 18;
f = 21;
console.log(e >= 20);//false 20を含めて20の以上の数字がtrue
console.log(f >= 20);//true


//string
//文字のunicodeの規格で判断する
//         50     49(頭文字だけを読み込み)
let num = "2" > "1000";//true
 //        41       62
let srt = "Apple" > "banana"//false

