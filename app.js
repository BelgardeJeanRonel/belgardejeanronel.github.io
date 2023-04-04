const ratio = .3;
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
const linkHeader = document.querySelector(".link-header");


iconOpenMenu.addEventListener("click", function() {

    menuModal.classList.toggle("show-modal");
    linkHeader.classList.toggle("show-modal");


    iconOpenMenu.animate([
        { transform: 'scale(0)' },
        { transform: 'scale(1.5)' }
        ], {
        duration: 600
        }
    )
    
})

const iconCloseMenu = document.querySelector(".icon-close-menu");
iconCloseMenu.addEventListener("click", function() {
    menuModal.classList.toggle("show-modal");
    linkHeader.classList.toggle("show-modal");


    linkHeader.animate([
        { transform: 'translate(0)'},
        { transform: 'translate(200%)'},
      ], {
        duration: 300,
    })
})

menuModal.addEventListener("click", function(){
    menuModal.classList.toggle("show-modal");
    linkHeader.classList.toggle("show-modal");

    linkHeader.animate([
        { transform: 'translate(0)'},
        { transform: 'translate(200%)'},
      ], {
        duration: 300,
    })
})