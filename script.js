const burger = document.getElementById('burger');
const navigation = document.getElementById('navigation');

if (burger && navigation) {
    burger.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
};

function playAudio(){
    var x = document.getElementById("bgm");
    x.play();
    x.volume = 0.2;
}