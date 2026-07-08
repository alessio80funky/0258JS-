///非同期処理

//.then()

fetch("./data.json")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))


//async/await

try{

async function load(){
    const res = await fetch(data.json);
    const data = await res.json();
    console.log(data)
}
}catch(error){
    console.log(error)
}




