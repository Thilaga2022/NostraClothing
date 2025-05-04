
// Selecting menu icon,sidenav and close button

var menu = document.getElementById("menuIcon")
var sidenav = document.getElementById("sidenav")
var close  = document.getElementById("closeIcon")

menu.addEventListener("click", function(){
    sidenav.style.left = 0
})

close.addEventListener("click", function(){
    sidenav.style.left = "-60%"
})



// Contact form send button functionality

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("textArea");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const username = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  

  if (!username) {
    alert("Name is required.");
    nameInput.focus();
    return;
  }

  if (!email) {
    alert("Email is required.");
    emailInput.focus();
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return;
  }

  


  if (!message) {
    alert("Please type in your message.");
    messageInput.focus();
    return;
  }

  

  // Clear input fields after successful submission
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
  alert("Thanks for writing to us! We will reach out to you soon!")
});
