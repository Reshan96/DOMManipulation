//GetElementByID()

// const title = document.getElementById('main-heading');
// console.log(title);

// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// const listItemsbyClass = document.getElementsByClassName('list-items');
// console.log(listItemsbyClass);

// // querySelector: selects the 1st one
// const container = document.querySelector('div');
// console.log(container);

// const containerList = document.querySelectorAll('#list-items');
// console.log(container);


const title = document.querySelector('#main-heading');
console.log(title);

title.style.color = "red";

const listItems = document.querySelectorAll('.list-items');

for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '1.5rem';
}



