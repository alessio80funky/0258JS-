//constructor関数

//従来のオブジェクトの構築
const taro2 = {
    name: "太郎",
    age: 30
}

const hanako2 = {
    name: "花子",
    age: 25
}

//====================================//

function Human(name, age){
    this.name = name;
    this.age = age;
};

const taro = new Human("太郎", 30);
const hanako = new Human("花子", 25);


console.log(taro.name);



