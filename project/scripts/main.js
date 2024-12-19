// Animated hamburger menu starts here

let hamburgerdiv = document.querySelector(".hamburger")
let backdropdiv = document.querySelector(".backdrop")
let navCon = document.querySelector(".mobile-nav-container ")


function toggleclass() {
    hamburgerdiv.classList.toggle('crossburger')
    navCon.classList.toggle('show-mobile-navcontainer')
    backdropdiv.classList.toggle('showbackdrop')
}

hamburgerdiv.addEventListener("click", toggleclass)
backdropdiv.addEventListener("click", toggleclass)
// Animated hamburger menu ends here