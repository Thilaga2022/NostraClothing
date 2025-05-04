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

// Sliding Effect for main container div

    const track = document.querySelector('.slide-track');
    const leftBtn = document.querySelector('.slider-left-btn');
    const rightBtn = document.querySelector('.slider-right-btn');
    const totalSlides = document.querySelectorAll('.slide-image-container').length;

    let currentSlide = 0;

    function updateSlide() {
        track.style.transform = `translateX(-${currentSlide * 100}vw)`;
    }

    rightBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    });

    leftBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide();
    });

    updateSlide(); // Initialize on page load



