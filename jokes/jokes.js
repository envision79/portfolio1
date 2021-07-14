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



let highlightedJoke = document.querySelector('.highlightedJoke');
let jokesul = document.querySelector('.jokesul');
const button = document.querySelector('.newJokes');

//an async function always returns a promise
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
}

let k = 0;
const addDadJoke = async () => {
    const newLI = document.createElement('LI');
    const newSpan = document.createElement('SPAN');
    if(k%2 === 0) {
        newSpan.classList.add("changingAboutMe")
    }
    const jokeText = await getDadJoke();
    newSpan.textContent = jokeText;
    newLI.append(newSpan);
    jokesul.append(newLI);
}

const getHighJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        highlightedJoke.textContent = res.data.joke;
    } catch (e) {
        highlightedJoke.textContent = "No New Jokes Available Now :(";
    }
}


getHighJoke();
button.addEventListener('click', function() {
    ++k;
    addDadJoke();
});

// let serverSlow = document.querySelector('.serverSlow');
// setInterval(() => {
//     serverSlow.textContent = "Loading Jokes!. Sorry for the delay ('_') "
// }, 10000);
