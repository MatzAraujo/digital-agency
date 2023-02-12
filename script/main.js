
const menuOpen = document.querySelector(".menu")
const toggle = document.querySelectorAll(".toggle")

for(const element of toggle){
    element.addEventListener('click', () => {
        menuOpen.classList.toggle("open")
    })
}