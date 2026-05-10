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

const previews = document.querySelectorAll(".project-preview");

previews.forEach((img) =>{

    const activeSrc = img.dataset.active;
    const staticSrc = img.dataset.static;
    
    img.addEventListener("mouseenter", () => {
        img.src = activeSrc;
    });

    img.addEventListener("mouseleave", () => {
        img.src = staticSrc;
    });
});