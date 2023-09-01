let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})



const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const videoPopup = document.getElementById("videoPopup");
const videoFrame = document.getElementById("videoFrame");

openPopupButton.addEventListener("click", () => {
    videoPopup.style.display = "block";
    videoFrame.play();
});

closePopupButton.addEventListener("click", () => {
    videoPopup.style.display = "none";
    
});


videoPopup.addEventListener("click", (event) => {
    if (event.target === videoPopup) {
        videoFrame.pause();
    }
});

videoFrame.addEventListener("ended", () => {
    videoFrame.pause();
    videoPopup.style.display = "none";
});