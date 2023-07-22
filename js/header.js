const header = document.querySelector("#header");
const btn = document.querySelector(".btn-mobile")
const menu = document.querySelector("#menu");

// SCROLL
window.addEventListener("scroll", (e)=>{
    header.classList.toggle('sticky', window.scrollY > 0)
})

// btn-mobile
btn.addEventListener('click', ()=>{
    header.classList.toggle('active');
    menu.classList.toggle('active');
});

