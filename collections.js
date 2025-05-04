var offerBar = document.getElementById("offerBar")
var offerBarclose = document.getElementById("offerClose")

offerBarclose.addEventListener("click",function(){
    offerBar.style.display="none"
})

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