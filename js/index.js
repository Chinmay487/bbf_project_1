const onBurgerClick = () => {
    const menu = document.getElementById("menu");
    const burger = document.getElementById("burger");
    if(menu.style.display === "none"){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

}