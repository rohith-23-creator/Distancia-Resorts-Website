const ham =  document.querySelector(".ham");
const nav = document.querySelector(".nav-items");
ham.addEventListener("click" , () => {
    nav.classList.toggle("active");
    ham.classList.toggle("active")
})

window.addEventListener("click" , (e) => {
    if(e.target != ham && e.target.parentNode != ham){
        nav.classList.remove("active");
        ham.classList.remove("active")
    }
})