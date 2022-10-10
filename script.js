let navBar=document.getElementById("navigation");
let tooglebar=document.getElementById("toggle-menu");
let navigation=document.getElementById("navigation");
tooglebar.addEventListener("click", function(){
    tooglebar.classList.toggle("toggleActive");
    navigation.classList.toggle("active");
})

let inputBlock=document.querySelector(".input-form");
let addButton=document.querySelector(".btn-add");
let ulitems=document.querySelector(".ul-items");
let clickButton=document.querySelector('.clearall');
let form=document.getElementById("form-wraper");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let value=inputBlock.value;
    let li=document.createElement("li");
    let deleteButton=document.createElement("button");
    deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener("click", function(){
        li.remove();
    })
    li.textContent=value;
    li.appendChild(deleteButton);
    ulitems.appendChild(li);
    inputBlock.value=" ";
})

clickButton.addEventListener("click", function(){
    ulitems.innerHTML=" ";
})