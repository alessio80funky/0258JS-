///論理演算子：　&&(and) ・そして・||(or)もしくは・!(not)否定する

console.log(true && true)//true
console.log( 5 > 3 && 10 > 7)//true

console.log(false && true)//false
console.log( 5 > 3 && 10 < 7)//false


console.log(true || true)//true
console.log( 5 > 3 || 10 > 7)//true

console.log(false || true)//true
console.log( 5 > 3 || 10 < 7)//true

console.log(false || false)//false


console.log(!true)//false
console.log(!false)//true


let age = 17;
let isStudent = true;
    //tsue       //true
if(age >= 18 || isStudent){
    console.log("大学生");
            //true       //true
}else if (age >= 18 || !isStudent){
    console.log("学生じゃない")
}else{
    console.log("大学生以下")
}





