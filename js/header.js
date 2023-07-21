const header = document.querySelector("#header");
const btn = document.querySelector(".btn-mobile")
const body = document.querySelector("body")

// SCROLL
window.addEventListener("scroll", (e)=>{
    console.log(window.scrollY);
})

// btn-mobile
btn.addEventListener('click', ()=>{
    header.classList.toggle('active');
});

