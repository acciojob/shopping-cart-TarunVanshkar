//your code here

const namee = document.getElementById('item-name-input');
const price = document.getElementById('item-qty-input');
const add = document.getElementById('add').addEventListener('click', addElement);
const tbody = document.getElementById('tbody');
const total = document.getElementById('total');


function addElement() {
    // console.log(namee.value, price.value)
    const row = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = namee.value;

    const td2 = document.createElement('td');
    td2.innerText = price.value;

    row.appendChild(td1);
    row.appendChild(td2);
    //  console.log(tbody.children[0].children[1].innerText)
    tbody.appendChild(row);

    let sum = 0;
    for(let i=0; i<tbody.children.length; i++){
        sum += Number(tbody.children[i].children[1].innerText);
    }

    total.innerText = sum;
    namee.value = '';
    price.value = '';
}