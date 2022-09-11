(() => {
BMenu= document.querySelector(".burger"),
nav=document.querySelector(".nav-links"),
MenuOpen=false;


BMenu.addEventListener("click", ()=> {
    if(!MenuOpen){
    nav.classList.add("nav-active");
    MenuOpen=true;
    }
    else{
        nav.classList.remove("nav-active");
        MenuOpen=false;
    }
})

// Variable
let overlayPanel = document.querySelector("#overlay-panel");
let btnVideo = document.querySelector("#btn-video");
let btnCloseOverlayPanel = document.querySelector("#overlay-close-btn");
let agencyVideo = document.querySelector('video');

function closeOverlayPanel() {
    overlayPanel.style.display = "none";
    agencyVideo.currentTime = 0;
    agencyVideo.pause();
}

function openOverlayPanel() {
    overlayPanel.style.display = "block";
}

btnVideo.addEventListener('click', openOverlayPanel);
btnCloseOverlayPanel.addEventListener('click', closeOverlayPanel);

})();