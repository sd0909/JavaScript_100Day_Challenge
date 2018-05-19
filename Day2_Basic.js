//Object
//3 way

//1.
var obj1 = new Object();

//2.
var obj2 = {
    name: "Jay",
    age: "20"
}

//3.
function Turtle(name,age){
    //屬性
    this.name = name;
    this.age = age;
    this.wow = function(){
        console.log('wow!wow!');
    }
}

Turtle.prototype.cry = function(){
    console.log('QQ');
}

const turtle = Turtle('jason',20);

turtle.wow();
turtle.cry();


//DOM (Document Object Model) & BOM (Browser Object Model)

//according ID
document.getElementById(elementID)

//accroding Tag Name
document.getElementsByTagName(tagName)

//accroding Name
document.getElementsByName(name)

//accroding class Name
document.getElementsByClassName(ClassName)

//CSS Selector
document.querySelectorAll()
document.querySelector()


//Event Handler

//事件處理機制
//事件處理 = 事件種類 + 事件處理方法
//事件種類:mouseover、click ...etc
//事件處理:處理事件的函數名稱

const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
    alert('Oops!');
});

