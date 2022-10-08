let navBar=document.getElementById("navigation");
let tooglebar=document.getElementById("toggle-menu");
let navigation=document.getElementById("navigation");
tooglebar.addEventListener("click", function(){
    tooglebar.classList.toggle("toggleActive");
    navigation.classList.toggle("active");
})