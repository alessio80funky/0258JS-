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