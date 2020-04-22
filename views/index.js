const tab = document.querySelector('.tab')
const table = document.querySelector('.clients')
const addClientForm = document.querySelector('.add-client')
const clientData = new FormData(addClientForm)
const clientInput = document.querySelector('.addcd')




const getClients = () => {
    let clients = [];

    fetch('/clients')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        clients = data
        console.log(clients[1]);
        console.log('fsdf');

        for (let i = 0; i<clients.length; i++) {
            var tr = document.createElement('tr');
            tr.classList.add('client')
            tr.setAttribute('id', clients[i].klient_id)
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var text1 = document.createTextNode(clients[i].imie);
            var text2 = document.createTextNode(clients[i].nazwisko);

            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);

            table.appendChild(tr);

            console.log(i);
        }
    })
}

const getOrders = () => {
    let orders = [];

    fetch('/orders')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        orders = data
        console.log(orders[1]);
        console.log('fsdf');

        for (let i = 0; i<orders.length; i++) {
            var tr = document.createElement('tr');
            tr.classList.add('client')
            tr.setAttribute('id', orders[i].klient_id)
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var text1 = document.createTextNode(orders[i].imie);
            var text2 = document.createTextNode(orders[i].nazwisko);

            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);

            table.appendChild(tr);

            console.log(i);
        }
    })
}

const getClients = () => {
    let clients = [];

    fetch('/clients')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        clients = data
        console.log(clients[1]);
        console.log('fsdf');

        for (let i = 0; i<clients.length; i++) {
            var tr = document.createElement('tr');
            tr.classList.add('client')
            tr.setAttribute('id', clients[i].klient_id)
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var text1 = document.createTextNode(clients[i].imie);
            var text2 = document.createTextNode(clients[i].nazwisko);

            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);

            table.appendChild(tr);

            console.log(i);
        }
    })
}

const getClients = () => {
    let clients = [];

    fetch('/clients')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        clients = data
        console.log(clients[1]);
        console.log('fsdf');

        for (let i = 0; i<clients.length; i++) {
            var tr = document.createElement('tr');
            tr.classList.add('client')
            tr.setAttribute('id', clients[i].klient_id)
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var text1 = document.createTextNode(clients[i].imie);
            var text2 = document.createTextNode(clients[i].nazwisko);

            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);

            table.appendChild(tr);

            console.log(i);
        }
    })
}

const getClients = () => {
    let clients = [];

    fetch('/clients')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        clients = data
        console.log(clients[1]);
        console.log('fsdf');

        for (let i = 0; i<clients.length; i++) {
            var tr = document.createElement('tr');
            tr.classList.add('client')
            tr.setAttribute('id', clients[i].klient_id)
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var text1 = document.createTextNode(clients[i].imie);
            var text2 = document.createTextNode(clients[i].nazwisko);

            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);

            table.appendChild(tr);

            console.log(i);
        }
    })
}



const sendClient = (event) => {
    clientInput.forEach((el) => {
        alert(el.nodeValue)
    })
}

window.onLoad = getClients()

clientInput.addEventListener('onChange', alert(e.target.value), false)

addClientForm.addEventListener('submit', sendClient, false)