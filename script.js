const burger = document.getElementById('burger');
const navigation = document.getElementById('navigation');

if (burger && navigation) {
    burger.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
};