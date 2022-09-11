(() => {
    // hamburguer menu
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

// Video 
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

// Bio Information Team
let dianneTextCon = document.querySelector(".dianneText p"),
    mamathaTextCon = document.querySelector(".mamathaText p"),
    mariiaTextCon = document.querySelector(".mariiaText p"),
    tallyTextCon = document.querySelector(".tallyText p"),
    dianneButton = document.querySelectorAll("#dianneBut button"),
    mamathaButton = document.querySelectorAll("#mamathaBut button"),
    mariiaButton = document.querySelectorAll("#mariiaBut button"),
    tallyButton = document.querySelectorAll("#tallyBut button");

    const dianneBio = [`I enjoy creating graphics, assets and design while also working on how it can be applied on web developement. This allows me to work on design and understand the technical feasibility and possible improvement of my designs.`]; 
      
    const mamathaBio = [`A growing web developer who deeply care about your company as you do, will be right there with you for creating the website you dreamt of. Now a current student of Interactive Media Design at Fanshawe College, for broadning my skills and knowledge.`];

    const mariiaBio = [`A creative and customer-oriented designer with an eye for commercial fashion and detail in product styling. Constantly evolving and growing. From the beginning of my career, I started working as a freelancer with a range of different clients who allowed me to learn in many different fields, thus broadening my skills.`];

    const tallyBio = [`I am a creative, innovative and enthusiastic graphic designer with almost ten years of experience in Communication and Marketing. I am currently specializing in web development and interactive media.`];

    //Dianne
    function showDianneBio() {
        arrayIndex = this.dataset.arrayref;
        dianneTextCon.textContent = dianneBio[arrayIndex];
    }
    
    dianneButton.forEach(button => button.addEventListener("click",showDianneBio));

    //Mamatha
    function showMamathaBio() {
        arrayIndex = this.dataset.arrayref;
        mamathaTextCon.textContent = mamathaBio[arrayIndex];
    }

    mamathaButton.forEach(button => button.addEventListener("click",showMamathaBio));

    //Mariia
    function showMariiaBio() {
        arrayIndex = this.dataset.arrayref;
        mariiaTextCon.textContent = mariiaBio[arrayIndex];
    }

    mariiaButton.forEach(button => button.addEventListener("click",showMariiaBio));

    //Tally
    function showTallyBio() {
        arrayIndex = this.dataset.arrayref;
        tallyTextCon.textContent = tallyBio[arrayIndex];
    }

    tallyButton.forEach(button => button.addEventListener("click",showTallyBio));

})();