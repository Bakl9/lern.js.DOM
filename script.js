  
var div = document.querySelector('#playground');
var p = document.querySelectorAll('.text');
var h1 = document.querySelector('h1');
div.innerHTML = '<h2 style ="color: red;">From javascript</h2>'
 
h1.textContent = 'change from js'
var input = document.querySelector('input');
console.log(input.value);
console.log(div.innerHTML);
console.log(p);
console.log(h1);
///////////////////////////////////////////////////////////////////////////////////////
var a = document.querySelector('a');
var aldHref = a.getAttribute('href');

a.setAttribute('href', 'https://ya.ru');
a.textContent = 'Yandex'

console.log(a.attributes);

////////////////////////////////////////////////////////////////////////////////////////
var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');

box1.classList.add('red');
var hasClass = box2.classList.contains('orang');
console.log(hasClass);

if (hassClass) {
    box2.classList.remove('orang');
} else {
    box2.classList.add('orang');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var button = document.querySelector('button');
var h1 = document.querySelector('h1');
var input = document.querySelector('input');

function buttonClick() {
    console.log('click!');
    h1.textContent = input.value
};

h1.addEventListener('mouseenter', function(){
    this.style.color = 'red'
    this.style.backgroundColor = 'black';
});

h1.addEventListener('mouseleave', function(){
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent';
});

button.addEventListener('click', buttonClick);
let button = document.querySelector('button');

button.addEventListener('click', buttonClick);

function buttonClick() {
    console.log('cklicked!');
};
