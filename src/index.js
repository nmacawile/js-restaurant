let nav = document.querySelector(".header-nav")
let tabContents = document.querySelectorAll(".container")

nav.addEventListener('click', e => {
  if (e.target && e.target.classList.contains("links")) {
    tabContents.forEach(tabContent => {
      tabContent.classList.add("hidden")
    })

    let tabNumber = e.target.dataset.tab
    document.querySelector(`.tab-${tabNumber}`).classList.remove("hidden")    
  }
})