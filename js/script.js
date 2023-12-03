const menu_burger = document.getElementById("menu-burger");
const menu_list = document.getElementById("menu-list");

menu_burger.addEventListener("click",()=>{
    menu_burger.classList.toggle("is-active");
    menu_list.classList.toggle("is-active");
    menu_list.classList.toggle("has-text-centered");
})