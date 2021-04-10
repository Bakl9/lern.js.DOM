
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
