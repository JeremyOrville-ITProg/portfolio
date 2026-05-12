// Optimization for smaller screens //
const burger = document.getElementById('burger');
const navigation = document.getElementById('navigation');

if (burger && navigation) {
    burger.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
};
// Background Music //
function playAudio(){
    var bgm = document.getElementById("bgm");

    if (bgm.paused){
        bgm.play();
        bgm.volume = 0.1;
    } else{
        bgm.pause();
    }
}

// Bark //
function bark(){
    var bark = document.getElementById("bark");
        bark.play();
}

// Background hover effect to highlight mouse pointer //
document.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--x", e.clientX + "px");
    document.documentElement.style.setProperty("--y", e.clientY + "px");
});


//Project Card Flair//
const cards = document.querySelectorAll(".projectcard");

cards.forEach((card) =>{

    const img = card.querySelector(".projectpreview");

    const activeSrc = img.dataset.active;
    const staticSrc = img.dataset.static;
    
    card.addEventListener("mouseenter", () => {
        img.src = activeSrc;
    });

    card.addEventListener("mouseleave", () => {
        img.src = staticSrc;
    });
});

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.02)
        `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    });

});

//Plays swipeup/down depending on if current section is lower/higher than target section type shi//

const swipeup = document.getElementById("swipeup");
const swipedown = document.getElementById("swipedown");

swipeup.volume = 0.1;
swipedown.volume = 0.1;

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link =>{
    link.addEventListener("click", function (){
        const targetId = this.getAttribute("href");

        //ignores empty links
        if (!targetId || targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;


        //current scroll pos
        const currentScroll = window.scrollY;

        //target section pos
        const targetScroll = targetSection.offsetTop;

        //stops both sounds
        swipeup.pause();
        swipedown.pause();


        //Always resets audio to not stack sounds.//
        swipeup.currentTime = 0;
        swipedown.currentTime = 0;

        //Compares section if higher or lower, then decides which audio to play.//
        if (targetScroll > currentScroll){
            swipedown.play();
        } else if (targetScroll < currentScroll){
            swipeup.play();
        }
    });
});


//plays sound when dropdown menu is clicked (for mobile screens)
burger.addEventListener('click',()=>{

})