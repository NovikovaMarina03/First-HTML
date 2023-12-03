alert("Hello JS"); //function()
'use strict'

//window.alert(); //metod / function

//var let const

var a = 2;

let b = 13;
//alert(a + b);

const c="world";

console.log(a + b);

let my_blok = "<div><p>Hello</p></div>";

// local scope
function Hello () {
console.log("hello world");
}

function hello_msg(msg) {
    console.log(msg);
}

function add(x, y){
    return x = y;
}

Hello();

hello_msg("Hello there");

let res = add(3, 3);

console.log(res);

console.log("It's not OK", 0.1 + 0.2)
// == != >= <= < > != === !== 
if (0.1 + 0.2 == 0.3) {
    console.log("It's OK", 0.1 + 0.2)
} 
else if (0.1 + 0.2 === 0.3) {
    console.log("It's not OK", 0.1 + 0.2)
}
else {
    console.log("It's OK", 0.1 + 0.2)
}

let x = 12, y = 7;

let o = '/';
switch (o) {
    case '+':
        console.log(x + y);
        break;
        case '-':
        console.log(x - y);
        break;
        case '*':
        console.log(x * y);
        break;
        case '/':
        console.log(x / y);
        break;
}
//like
let likeicon = document.querySelector('a.likeicon');
likeicon.onclick = () => {
    console.log("I'm like it")
};
let faHart = document.querySelector('a.fa-heart span');
console.log(faHeart);

let likeicon = document.querySelector('a.likeicon');
likeicon.onclick = () => {
    //console.log("I'm like it")
    console.log(faHeart.textContent)
    let counter = faHeart.textContent;
    counter++;
    faHart.textContent = counter;
};



















