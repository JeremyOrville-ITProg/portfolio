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