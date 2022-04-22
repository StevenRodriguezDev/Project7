
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

const bell = document.querySelector(".bell");
const dropdown = document.querySelector(".dropdown");

const bellClick = bell.addEventListener("click", (e) => {
    if (dropdown.style.display === '') {
        dropdown.style.display = 'flex';
    } else {
        dropdown.style.display = '';
    }
});

