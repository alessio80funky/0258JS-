//switch文

/*

switch (引数) {
  case 値1:
    // 式の値が値1と一致した場合に実行される処理
    break;
  case 値2:
    // 式の値が値2と一致した場合に実行される処理
    break;
  default:
    // どのcaseにも該当しない場合に実行される処理
}

*/
/*
let rank = "";

switch(rank){
    case "S":
        console.log("Sランクです");
        break;
    case "A":
        console.log("Aランクです");
        break;
    case "B":
        console.log("Bランクです");
        break;
    default:
        console.log("該当するランクがありません");


}*/

//fall through（フォールスルー）
//caseの処理を続けて実行することができる、breakを省略することで実現できる

let rank = "A";

switch(rank){
    case "S":
        console.log("Sランクです");
    
    case "A":
        console.log("Aランクです");
      
    case "B":
        console.log("Bランクです");

    default:
        console.log("該当するランクがありません");


}

