const menuIcon = document.getElementById("menu-icon")
const nav = document.getElementById("nav");
const menuOpen = document.getElementsByClassName("open");
const menuClose = document.getElementsByClassName("close");


menuOpen[0].addEventListener("click", () =>{
    nav.style.top = "0";
    menuOpen[0].style.display = "none";
    menuClose[0].style.display = "block" ;
});
menuClose[0].addEventListener("click", () =>{
    nav.style.top = "-100vh";
    menuOpen[0].style.display = "block";
    menuClose[0].style.display = "none" ;
})
