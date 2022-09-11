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

})();