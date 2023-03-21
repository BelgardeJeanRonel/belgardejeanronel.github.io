const ratio = .1;
const options = {
    root : null,
    rootMargin : "0px",
    threshold : ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach( entry => {
        if (entry.intersectionRatio > ratio){
            entry.target.classList.remove("reveal")
            observer.unobserve(entry.target)
            console.log("visible");
        }else{
            console.log("invisible");
        }
    })
}

document.documentElement.classList.add("reveal-loaded");
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach( r => {
    observer.observe(r)
})


const iconOpenMenu = document.querySelector(".icon-open-menu");
const menuModal = document.querySelector(".modal");
iconOpenMenu.addEventListener("click", function() {

    menuModal.classList.toggle("show-modal");
    iconOpenMenu.animate([
            { transform: 'scale(0)' },
            { transform: 'scale(1.5)' }
          ], {
            duration: 600
          })

          if (menuModal.className === "section2-link show-modal"){
            
          }

})

const iconCloseMenu = document.querySelector(".icon-close-menu");
iconCloseMenu.addEventListener("click", function() {
  menuModal.classList.toggle("show-modal");


})