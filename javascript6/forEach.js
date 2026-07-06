//foreEach

//配列の要素を順番に処理する(反復メソッド)

const numbers = [1, 2, 3, 4, 5];

//従来の書き方
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//forEachメソッド
numbers.forEach((number) => {
    console.log(number);
});

//プロパティのパターンの指定
numbers.forEach((value, index, array) => {
    console.log(value, index, array);
});

const score = [80, 90, 100, 70, 60];

score.forEach(function (score) {
    if (score >= 80) {
        console.log(score + "点は合格です");
    }else {
        console.log(score + "点は不合格です");
    }
});
