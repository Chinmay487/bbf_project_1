const onBurgerClick = () => {
    const menu = document.getElementById("menu");
    const burger = document.getElementById("burger");
    if(menu.style.display === "none"){
        menu.style.display = "block";
        burger.innerHTML = "X"
    } else {
        menu.style.display = "none";
        burger.innerHTML = "&#9776;"
    }

}

var myNav = document.getElementById('navbar');
window.onscroll =  () => { 
    "use strict";
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ) {
        myNav.classList.add("bg_colored");
        myNav.classList.remove("bg_transparent");
    } 
    else {
        myNav.classList.add("bg_transparent");
        myNav.classList.remove("bg_colored");
    }
};


