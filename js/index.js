const toggle_menu = document.getElementById("toggle_menu");
const menu_bar = document.querySelector(".menu_bar");

toggle_menu.addEventListener("click",function(){
    menu_bar.classList.toggle("d_block");
})
window.addEventListener("scroll",function(){
    menu_bar.classList.remove("d_block");
})