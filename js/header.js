const header = document.querySelector("#header");
const btn = document.querySelector(".btn-mobile")
const menu = document.querySelector("#menu");
const body = document.querySelector("body");

// SCROLL
window.addEventListener("scroll", (e)=>{
    console.log(window.scrollY);
    header.classList.toggle('sticky', window.scrollY > 0)
})

// btn-mobile
btn.addEventListener('click', ()=>{
    header.classList.toggle('active');
    menu.classList.toggle('active');
});

