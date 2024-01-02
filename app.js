let number = document.getElementById('number');
let increment = document.getElementById('increase');
let decrement = document.getElementById('decrease');
let zero = document.getElementById('zero');


increment.addEventListener('click', () => +number.innerHTML++)
decrement.addEventListener('click', () => +number.innerHTML--)
zero.addEventListener('click', () => number.innerHTML = 0)

