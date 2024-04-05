let film  = document.querySelectorAll(".scroll")

document.addEventListener("scroll", function() {
    film.forEach(carosello => {
        carosello.classList.add("show-carousel")
    });
})