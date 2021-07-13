window.onscroll = function(){myFunction()};
const navbar = document.querySelector(".navbar");
const logoSpan = document.querySelector(".lioSpan");
var navLinks = document.getElementsByClassName("navLinks");

function myFunction() {
    if(window.pageYOffset > 20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

let home = document.querySelector(".home");
let projects = document.querySelector(".projects");
let exp = document.querySelector(".exp");
let jokes = document.querySelector(".jokes");

home.addEventListener('click', function() {
    removeActive();
    home.classList.add("active");
})

jokes.addEventListener('click', function() {
    removeActive();
    jokes.classList.add("active");
})

projects.addEventListener('click', function() {
    removeActive();
    projects.classList.add("active");
})
exp.addEventListener('click', function() {
    removeActive();
    exp.classList.add("active");
})

function removeActive() {
    jokes.classList.remove("active");
    home.classList.remove("active");
    projects.classList.remove("active");
    exp.classList.remove("active");
}