/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

//Dynamically populated nav menu

let datnavs = document.querySelectorAll("[data-nav]");
const navlist = document.getElementById("navbar__list");

let justafunction = () => {
  console.log("Acquired datanavs");
  console.log(datnavs);

  let list = document.createElement("LI");

  for (let datnav of datnavs) {
    let createAnchor = document.createElement("a");
    createAnchor.setAttribute("href", "#" + datnav.id);
    createAnchor.className = "pagelinks";
    createAnchor.textContent = datnav.getAttribute("data-nav");
    list.className = "menu__link";
    list.appendChild(createAnchor);
  }

  navlist.appendChild(list);

  console.log("list complete");
  console.log(list);
};

//Calls functions
window.onload = () => {
  console.log("About to run functions");
  justafunction(), smoothScroll();
};

//Adds "your-active-class" class to active section

let sectgroup = document.querySelectorAll("section");
let menuanchors = document.getElementsByClassName("pagelinks");

window.addEventListener(
  "scroll",
  () => {
    for (let section of sectgroup) {
      if (section.getBoundingClientRect().top < window.innerHeight) {
        section.classList.add("your-active-class");
        console.log("class change");
      }
      if (section.getBoundingClientRect().bottom < window.innerHeight) {
        section.classList.remove("your-active-class");
      }
    }
  },
  true
);

//Highlight nav item when section is in viewport / Adds "active-class"

let onScrollHighlight = () => {
  const navlinks = document.querySelectorAll("#navbar__list a");
  const scrollPos = window.pageYOffset ||  document.documentElement.scrollTop || document.body.scrollTop;

  for (i = 0; i < navlinks.length; i++) {
    const currLink = navlinks[i];
    const actsect = currLink.getAttribute("href");
    const refElement = document.querySelector(actsect);
    if (
      refElement.offsetTop <= scrollPos &&
      refElement.offsetTop + refElement.offsetHeight > scrollPos
    ) {
      document.querySelector("#navbar__list li a").classList.remove("active-class");
      currLink.classList.add("active-class");
    } else {
      currLink.classList.remove("active-class");
    }
  }
};

window.document.addEventListener("scroll", onScrollHighlight);

//Smooth scroll on click with JQuery
let smoothScroll = () => {
  $(document).ready(() => {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          () => {
            window.location.hash = hash;
          }
        );
      }
    });
  });
};

//Performance test

doSomething = () => {
  console.log("Writing fuctions with arrows just takes longer...");
};

const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
// Way less than Udacity page, so it can't be that bad...
