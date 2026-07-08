//json

// JSON基礎構造

//JSON「キー」と「値」の組み合わせでできています。

/*
[
    {"name": "Maru","age": "36"},
    {"name": "Shino","age": "37"},
    {"name": "Ken","age": "38"},
]
*/

/**
  JSONで使えるデータ型

  ストリング　=> "Maru"
  ナンバー　 => 25
  ブリアン　=> true/false
  配列　=> ["A","B"]
  オブジェクト　=> {"name": "Maru", "age": "35"}
  null => そのまま

 */

 //JSONの入れ子（ネスト）

 const user =[
 {
    "name": "maru",
    "age": 32,

    "adress": {
        "city":"osaka",
        "zip": "540-0001"
    }
}
]

console.log(user[0].name)

//JSONのメソッド

//オブジェクト　-> JSON文字列に変換（送信用）
const user2 = {name: "Maru", age: 35};
const jsonText = JSON.stringify(user2, null , 2)
console.log(typeof jsonText)


//JSON文字列 -> オブジェクト　（受信用）

const jsonData = `
{
    "name": "Maru",
    "age": 35
  }
`;
const obj = JSON.parse(jsonData);
console.log(obj.name);

//JSONに関しての注意

//日付を書く時　→ "date": "2025-10-06" 文字列で書く
//関数やメソッドはNG　→ JSONはデータ専用のものですので、動作はかけない。
//コメントかけない。// /* **/ ->は使えません。

//JSONの使われ方

// Web API　→　サーバーとブラウザの間でデータを交換


//設定ファイル　→　テーマ・言語設定など


//アプリ通信　→　モバイルアプリとサーバーの間のデータ通信


//データ分析　→　統計データを保存