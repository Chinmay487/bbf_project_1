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

let myNav = document.getElementById('navbar');
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

let arrow = document.getElementById('arrow')
window.onscroll = () => {
    "use strict";
    if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300 ){
        arrow.style.display = "block";
    } else {
        arrow.style.display = "none";
    }
}



let gridRev = document.getElementById("item_rev")
let currentWidth = window.screen.availWidth;
console.log(currentWidth)
if(currentWidth <= 800){
    gridRev.classList.remove('grid_item_2');
    gridRev.classList.add('grid_item_2_rev');
} else {
    gridRev.classList.add('grid_item_2');
    gridRev.classList.remove('grid_item_2_rev');
}


