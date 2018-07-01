import home from "./tabs/home"
import menu from "./tabs/menu"
import contact from "./tabs/contact"
import mainParallax from "./main-parallax"
import footerParallax from "./footer-parallax"
import mainNav from "./main-nav"

const wrapper = document.querySelector(".wrapper")

wrapper.insertAdjacentHTML("beforeend", mainParallax)
wrapper.insertAdjacentHTML("beforeend", mainNav)
wrapper.insertAdjacentHTML("beforeend", `<div class="main"></div>`)
wrapper.insertAdjacentHTML("beforeend", footerParallax)

const main = document.querySelector(".main")
main.innerHTML = home

let nav = document.querySelector(".header-nav")
let tabContents = document.querySelectorAll(".container")

nav.addEventListener('click', e => {
  if (e.target && e.target.classList.contains("links")) {

    let tabNumber = parseInt(e.target.dataset.tab)
    
    switch(tabNumber) {
      case 2:
        main.innerHTML = menu
        break;
      case 3:
        main.innerHTML = contact
        break;
      default:
        main.innerHTML = home
    } 
  }
})