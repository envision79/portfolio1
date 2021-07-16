window.onscroll = function () {
    myFunction();
  };
  const navbar = document.querySelector(".navbar");
  const logoSpan = document.querySelector(".lioSpan");
  var navLinks = document.getElementsByClassName("navLinks");
  
  function myFunction() {
    if (window.pageYOffset > 20) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
    if (window.pageYOffset < 367) {
      home.classList.add("active");
    }
    if (
      (window.pageYOffset > 367 &&
        window.pageYOffset < 965 &&
        window.innerWidth > 768) ||
      (window.innerWidth <= 768 &&
        window.pageYOffset > 367 &&
        window.pageYOffset < 1600)
    ) {
      removeActive();
      projects.classList.add("active");
    } else {
      projects.classList.remove("active");
    }
    // if((window.pageYOffset > 965 && window.innerWidth > 768) || ( window.innerWidth <=768 &&  window.pageYOffset >1650)) {
    //     removeActive();
    //     exp.classList.add("active");
    // }
    if (window.pageYOffset + screen.height > document.body.scrollHeight - 2) {
      removeActive();
      exp.classList.add("active");
    }
  }
  
  let home = document.querySelector(".home");
  let projects = document.querySelector(".projects");
  let exp = document.querySelector(".exp");
  let jokes = document.querySelector(".jokes");
  
  home.addEventListener("click", function () {
    removeActive();
    home.classList.add("active");
  });
  
  jokes.addEventListener("click", function () {
    removeActive();
    jokes.classList.add("active");
  });
  
  projects.addEventListener("click", function () {
    removeActive();
    projects.classList.add("active");
  });
  
  exp.addEventListener("click", function () {
    removeActive();
    exp.classList.add("active");
  });
  
  function removeActive() {
    jokes.classList.remove("active");
    home.classList.remove("active");
    projects.classList.remove("active");
    exp.classList.remove("active");
  }
  
  // let aboutMe = document.querySelector(".changingAboutMe");
  // const aboutMeContent = [
  //   "I am an enthusiastic learner",
  //   "I am an adventure seeker",
  //   "I am a Full Stack web developer",
  //   "I am a Computer Engineering undergrad at NSUT.",
  // ];
  // let i = 0;
  // //The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds)
  // setInterval(() => {
  //   aboutMe.textContent = aboutMeContent[i];
  //   i++;
  //   if (i >= aboutMeContent.length) {
  //     i = 0;
  //   }
  // }, 4000);
  
  
  // ES6 Class
  class TypeWriter {
    constructor(txtElement, words, wait = 2000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = "";
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 100;
  
      if (this.isDeleting) {
        typeSpeed /= 3;
      }
  
      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  // Init On DOM Load
  document.addEventListener("DOMContentLoaded", init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
  