
const menuOpen = document.querySelector(".menu")
const toggle = document.querySelectorAll(".toggle")

for(const element of toggle){
    element.addEventListener('click', () => {
        menuOpen.classList.toggle("open")
    })
}

const links = document.querySelectorAll("nav ul li a")

const menu = document.querySelector(".menu")
const menuHeight = menu.offsetHeight 

// window.addEventListener("scroll", () => {
//     if( window.scrollY >= menuHeight){
//         menu.classList.add("scroll")
//     }else{
//         menu.classList.remove("scroll")
//     }
// })