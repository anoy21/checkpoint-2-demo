window.onload = function() {

  window.scrollTo(0, 0);
}

// -- BLOB --

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { pageX, pageY } = event;
  
  blob.animate({
    left: `${pageX}px`,
    top: `${pageY}px`
  }, { duration: 3000, fill: "forwards" });
};

// -- MENU --

function toggleNav() {
  const slideDownDiv = document.getElementById("slide-down-div");
  const body = document.querySelector("body");
  const navState = body.getAttribute("data-nav");
  const navbutton = document.getElementById("nav-toggle");

  if (navState === "false") {
    slideDownDiv.style.height = "100vh";
    body.setAttribute("data-nav", "true");
    navbutton.style.zIndex = "4"; 
    body.setAttribute("data-nav" , "true");
    body.classList.add("scroll-lock");
  } else {
    slideDownDiv.style.height = "0";
    body.setAttribute("data-nav", "false");
    navbutton.style.zIndex = "4";
    body.setAttribute("data-nav" , "false");
    body.classList.remove("scroll-lock") ;
  }
};


// --GSAP / SCROLLTRIGGER / LOCOMOTIVE SCROLL--

const trio = document.querySelectorAll('pin-wrap')
const textslide = document.querySelectorAll('texts')

// --VARIABLES--

gsap.registerPlugin(ScrollTrigger);

TweenLite.to(".pin-wrap", {
  scrollTrigger: {
    trigger: ".pin-wrap",
    toggleActions: "play reverse reverse restart",
    start: "1px",
    end: "500px 10%",
    // markers: true,

  },
  opacity: 0,
  y: "300px",
  duration: 1,
  ease: Back.easeIn.config(1.7),
});

TweenLite.to(".texts", {
scrollTrigger: {
  toggleActions: "play reverse",
  autoAlpha: -1,
  trigger: ".texts",
  // markers: true,
  start: "-1000vh 20%", 
  end: "125vh 40%",
},
opacity: 0,
x: "-200px",
duration: 1.5,
ease: Back.easeIn.config(1.7),
})

TweenLite.to(".texts2", {
  scrollTrigger: {
    toggleActions: "play reverse",
    autoAlpha: -1,
    trigger: ".texts",
    // markers: true,
    start: "-1000vh 20%", 
    end: "800vh 40%",
  },
  opacity: 0,
  x: "200px",
  duration: 1.5,
  ease: Back.easeIn.config(1.7),
  })

TweenLite.to(".texts3", {
  scrollTrigger: {
    toggleActions: "play reverse",
    autoAlpha: -1,
    trigger: ".texts",
    // markers: true,
    start: "-1000vh 20%", 
    end: "1500vh 40%",
  },
  opacity: 0,
  x: "-200px",
  duration: 1.5,
  ease: Back.easeIn.config(1.7),
  })

const abt = document.getElementById("about")
const tl1 = gsap.timeline({ paused: true, reversed: true,});
tl1.to(abt, {
  x: "400px",
  duration: 2
})

abt.addEventListener("click", myFunction); 
function myFunction () {
  tl1.reversed() ? tl1.play() : tl1.reverse();
}