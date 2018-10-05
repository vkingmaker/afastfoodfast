'use strict';
let count = 0,
  order = [],
  updated = [],
  template = [];

let buyFood = document.getElementById('table-content');
let itemCount = document.getElementById('items-in-chart');
let clearChart = document.getElementById('clear-chart');
let placeOrder = document.getElementById('placeOrder');
let loginUser = document.getElementById('loginUser');
// var shop = document.getElementById('shop');

clearChart.addEventListener('click',(e)=>{
e.preventDefault();
buyFood.innerHTML = `<tr></tr>`;
localStorage.clear();
count = 0;
itemCount.textContent = count;
});

document.addEventListener('click', (e) => {
// e.stopPropagation();
  if (e.target.tagName === 'A' && e.target.getAttribute('class') !== 'link') {
    let food = {};
    food.quantity = 1;
    e.preventDefault();
    console.log(e.target.nextSibling);
    let addButton = e.target;
    food.id = ++count;
    food.name = addButton.getAttribute('data-name');
    if (+addButton.nextSibling === +addButton.nextSibling.value) {
      food.quantity = +addButton.nextSibling.value;
    } else {
      console.log(addButton);
    }
    order.push(food);
    if (localStorage) {
      localStorage.setItem(food.quantity + '', JSON.stringify(order));
    }
    let gotten = localStorage.getItem(food.quantity + '');

    buyFood.innerHTML = `<tr></tr>`

    let storeLen = Object.keys(localStorage);

    updated = localStorage.getItem(storeLen.pop());

    console.log('Finally ', JSON.parse(gotten));
    console.log('updated List', JSON.parse(updated));

    itemCount.textContent = count;

    template = '<tr>' + JSON.parse(updated).map((value) => {
      return `<td>${value.id}</td><td>${value.name}</td><td>${value.quantity}</td></tr>`
    }).join('') + '</tr>';

    buyFood.insertAdjacentHTML('beforeend', template);
    console.log('This is the template', template);
  }
});
