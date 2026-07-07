//try...catch
//エラーをわかりやすくしてくれる構文です

try{
    console.log(name)
}catch(error){
    console.log("メッセージ：" + error.message)
}

//finally
///後処理を行う構文です

try{
    console.log(name)
}catch(error){
    console.log("メッセージ：" + error.message)
}finally{
   console.log("接続終了")
}

//throw

///例外の処理に対してさらにエラー処理を追加したいときに使う構文です

x = 4;
y = 0;

try{
    if(y === 0){
        throw new Error(" 0です ")
    }

    let z = x / y;

    console.log(z);

}catch(e){
    console.log("メッセージ：" + e.name +  e.message)
}