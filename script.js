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

// cart in //

const cartClose = document.getElementById("cart-close");
const cartOpen = document.getElementById("cart");
const cartBody = document.getElementById("cartbody");

cartClose.addEventListener("click", () =>{
    cartBody.style.display = "none";   
     
})

cartOpen.addEventListener("click", () => {
    cartBody.style.display = "block";
})

// log in //

const logClose = document.getElementById("log-close");
const logOpen =  document.getElementById("log-in");
const logInBody =  document.getElementById("loginbody");

logClose.addEventListener("click", () => {
    logInBody.style.display = "none";
})

logOpen.addEventListener("click", () => {
    logInBody.style.display = "block";
})