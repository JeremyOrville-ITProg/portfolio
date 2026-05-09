const burger = document.getElementById('burger');
const navigation = document.getElementById('navigation');

if (burger && navigation) {
    burger.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
};

function playAudio(){
    var bgm = document.getElementById("bgm");

    if (bgm.paused){
        bgm.play();
        bgm.volume = 0.1;
    } else{
        bgm.pause();
    }
}

function bark(){
    var bark = document.getElementById("bark");
        bark.play();
}

document.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--x", e.clientX + "px");
    document.documentElement.style.setProperty("--y", e.clientY + "px");
});