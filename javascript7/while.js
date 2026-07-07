//while文

//while文は、条件式がtrueの間、処理を繰り返すループ文です。

//基本構文
// while (条件式) {
//   条件式がtrueの間、繰り返す処理
// }

let i = 0;

while (i < 5) {
    console.log("iの値は" , i );
    i++;//iを1ずつ増やす ->必ず必要
}

///無限ループ
while (i < 5) {
    console.log("iの値は" , i );
  //増分がない
}

