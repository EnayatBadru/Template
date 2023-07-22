const header = document.querySelector("#header");
const btn = document.querySelector(".btn-mobile")
const menu = document.querySelector("#menu");
const link = document.querySelector("#menu > a");

// SCROLL
window.addEventListener("scroll", (e)=>{
    header.classList.toggle('sticky', window.scrollY > 0)
})

function ativar(){
    header.classList.toggle('active');
    menu.classList.toggle('active');
}

btn.addEventListener('click', ativar);
menu.addEventListener('click', ativar);