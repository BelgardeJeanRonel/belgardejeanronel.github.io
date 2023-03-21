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
let scrollY;

iconOpenMenu.addEventListener("click", function() {

    menuModal.classList.toggle("show-modal");
    iconOpenMenu.animate([
        { transform: 'scale(0)' },
        { transform: 'scale(1.5)' }
        ], {
        duration: 600
        }
    )

    scrollY = window.scrollY;
    
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    scrollY = document.body.style.top;
    
})

const iconCloseMenu = document.querySelector(".icon-close-menu");
iconCloseMenu.addEventListener("click", function() {
    menuModal.classList.toggle("show-modal");

    document.body.style.position = "static";
    scrollY = document.body.style.top;
    window.scrollTo(0, parseInt(scrollY ?? '0') * -1);

})