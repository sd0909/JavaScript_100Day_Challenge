var variable = "var 是全域變數";
let bls = "let 是block-scope的變數";
const num = "const 是常數";

//console.log可以在開發者工具中看到訊息，方便除錯
console.log(variable);
console.log(bls);
console.log(num);

//Operator
const name = "jay";
const now = 2018;
const birthYear = 1997;

//arithmetic operator
const age = now - birthYear + 1;

//comparison operator
const voteAge = 20;
const canVote = age >= voteAge;

//logical operator
const a = true;
const b = false;
const result1 = a&&b;
const result2 = a||b;

//Flow Control

//if ...else
if (age>=20){
    console.log("I can Vote");
}else{
    console.log("I can not Vote")
}

//for 
const arr = ['1','2','3'];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//while
var i = 0
while(i<3){
    console.log(arr[i]);
    i = i + 1;
}

//fubnction
function sum(x,y){
    return x+y;
}
console.log(sum(20,10));

//Object

