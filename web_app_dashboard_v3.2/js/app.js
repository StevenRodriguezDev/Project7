const alertDiv = document.querySelector(".alerts");

alertDiv.innerHTML = `<p><b>Alert:</b> You have unread messages</p>
<p class="alert-x">x</p>`

 const alertX = document.querySelector(".alert-x");

 const alertClose = alertX.addEventListener("click", (e) => {
     alertDiv.style.display = "none";
 });

const user = document.querySelector("#userField");
const message = document.querySelector("#messageField");
const sendBtn = document.querySelector("#sendMessage");

sendBtn.addEventListener("click", (e) => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out the user and the message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out the user field before sending");
    } else if (message.value === "") {
        alert("Please fill out the message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
        user.value = "";
        message.value = "";
    }
});

const bell = document.querySelector(".bell");
const dropdown = document.querySelector(".dropdown");

const bellClick = bell.addEventListener("click", (e) => {
    if (dropdown.style.display === '') {
        dropdown.style.display = 'flex';
    } else {
        dropdown.style.display = '';
    }
});

const usernames = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
const userField = document.querySelector('#userField');
const autocomplete = document.querySelector('.autocomplete');
const autocompleteUl = document.querySelector('.autocomplete-users');
let autocompleteChilds = document.querySelectorAll('.autocomplete-users li');

const autocompleteEvent = userField.addEventListener('input', (e) => {
    const userInput = userField.value.toLowerCase();
    for (let i = 0; i < usernames.length; i++) {
        const usernamesLowerCase = usernames[i].toLowerCase();
        if (usernamesLowerCase.includes(userInput) & userInput !== '') {
            addLi(usernames[i]);
        } else {
            removeLi(usernames[i]);
        }
    }
    autocompleteChilds = document.querySelectorAll('.autocomplete-users li');
    if (autocompleteChilds.length === 0) {
        autocomplete.style.display = 'none';
    } else {
        autocomplete.style.display = 'block';
    }
});

const autocompleteFocus = userField.addEventListener('focus', (e) => {
    if (autocompleteChilds.length === 0) {
        autocomplete.style.display = 'none';
    } else {
        autocomplete.style.display = 'block';
    }
});

const autocompleteBlur = userField.addEventListener('blur', (e) => {
    autocomplete.style.display = 'none';
});

const addLi = (name) => {
    if (autocompleteChilds.length === 0) {
        const li = document.createElement('LI');
        li.innerHTML = name;
        autocompleteUl.appendChild(li);
    } else {
        let x = 0;
        for (let i = 0; i < autocompleteChilds.length; i++) {
            const li = autocompleteChilds[i];
            
            if (li.innerHTML === name) {
                x++;
            }
        }
        if (x === 0) {
            const li = document.createElement('LI');
            li.innerHTML = name;
            autocompleteUl.appendChild(li);        
        } 
    }
};