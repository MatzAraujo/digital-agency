const menuOpen = document.querySelector(".menu")
const toggle = document.querySelectorAll(".toggle")

for(const element of toggle){
    element.addEventListener('click', () => {
        menuOpen.classList.toggle("open")
    })
}

const header = document.querySelector(".header")
const headerHeight = header.offsetHeight 

window.addEventListener("scroll", () => {
    if( window.scrollY >= headerHeight){
        header.classList.add("scroll")
    }else{
        header.classList.remove("scroll")
    }
})

const links = document.querySelectorAll("nav ul li a")

for(const link of links){
    link.addEventListener("click", () => {
        menuOpen.classList.remove("open")
    })
}



