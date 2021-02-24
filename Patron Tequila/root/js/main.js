const tlHero = gsap.timeline()

//hero text h1 
tlHero.from('#hero-text, h1', { duration: 2.5, ease: "back.out(1.6)", x: -500 })
    //Hero image make it bounce in on y axis
tlHero.from('.hero-image', { y: -500, duration: 2, ease: "bounce" }, "-=2.5")
    //hornet logo move around page 
tlHero.from('.hornet1', { y: 200, x: 150, duration: infinite, rotate: "120deg", ease: "sine.out", x: -200 })
tlHero.from('.hornet2', { x: 200, y: 150, duration: infinite, rotate: "20deg", ease: "sine.out", y: -200 })
    // modal intro make 
tlHero.from('.modal-intro', {
    x: -500,
    duration: 1,
    // ease: "back.out(1.5)",
    //     x: max
})


// OPEN MESSAGE SENT DIALOG // 

const dialog = document.querySelector('.mess-sent');
const submitButton = document.querySelector('submit');

submitButton.addEventListener('click', () => dialog.show());


// SCROLL THROUGH SECTIONS

gsap.defaults({ ease: "none", duration: 2 });

// create a sequence that moves to the sections of the site in from different directions 
const tl = gsap.timeline();
tl.from(".section-hero", { xPercent: -100 })
    .from(".section-journey", { xPercent: 100 })
    .from(".section-journey2", { yPercent: -100 })
from(".section-range1", { xPercent: -100 })
    .from(".section-range2", { xPercent: 100 })
    .from(".section-range3", { yPercent: -100 })
from(".section-range4", { xPercent: -100 })
    .from(".section-cocktails", { yPercent: 100 })
    .from(".section-contact", { yPercent: -100 });

// pin the container and link the animation to the scrollbar (scrub: true). 
ScrollTrigger.create({
    animation: tl,
    trigger: "#container",
    start: "top top",
    end: "+=4000",
    scrub: true

})

// // Button Event//
// // get modal & buttons
// const modalIntro = document.querySelector('.modal-intro')
// const modalYes = document.querySelector('.modal-yes')
// const modalNo = document.querySelector('.modal-no')


// .modalIntro({
//     autoOpen: true,
//     modal: true,
//     buttons: {
//         'modalYes': function() {
//             $(this).modalIntro('close');
//             $(this).find(".yes").click();
//         },
//         'modalNo': function() {
//             $(this).modalIntro('close');
//             $(this).find(".no").click();
//         }
//     }
// });

// // Modal
// const modalIntro = document.querySelector('.modal-intro')
// const modalYes = document.querySelector('.modal-yes')
// const modalNo = document.querySelector('.modal-yes')
// const modalContent = document.querySelector('.modal-content')



// modalYes.addEventListener('click', () => modalIntro.hide())

// modalNo.addEventListener('click', () => modalIntro.hide())
// modalNo.addEventListener('click', () => {
//     modalContent = true
// })

//  document.querySelector('.modalIntro').style.display = "none"


// window,onclick = function(event) {
//     if (event.target == modalIntro) {
//         modal.style.display = "none";
//     }
// }


// // Scroll trigger to sections of the page
// const tlHero = gsap.timeline({
//     scrolltrigger: {
//         trigger: ".section-journey",
//         start: "top top"
//     }
// })

// tlHero.to(".section-journey")



//SCROLLING BETWEEN SECTIONS -GSAP Scroll Trigger 


// const tlsectionHero = gsap.timeline({
//     delay: 0.5,
//     scrolltrigger: {
//         trigger: '.section-hero'
//     }

// })




// //or to scroll to the element with the ID "#someID" (as of GSAP 1.19.0):
// gsap.to(window, { duration: 2, scrollTo: ".section-hero" });




// //Scroll from hero page to 
// function sectionHero() {
//     console.log("Hero")

//     // gsap scroll timeline and set delay to 0.5s
//     const t1 = new TimelineMax({ delay: 0.5 })

//     t1.from('.hero', { bottom: "50%", top: "50%", duration: 0.5 })
//         // set at 50% duration of 0.5s
//         .from('.journey', { x: -800, duration: 1.5, ease: 'power.out4', opacity: 0, s })

//     .from('journey2', { y: 30, opacity: 0, duration: 3 }, "-=1")

//     // .from('.placeholder', {scale: 0, opacity: 0, duration: 0.7}, '-=1.1')
//     .from('patron-range1', { x: 30, opacity: 0, duration: 3 }, "-=2")
//         .from('patron-range2', { x: 30, opacity: 0, duration: 3 }, "-=2")
//         .from('patron-range3', { x: 30, opacity: 0, duration: 3 }, "-=2")
//         .from('patron-range4', { x: 30, opacity: 0, duration: 3 }, "-=2")

//     .from('cocktails', { y: 30, opacity: 0, duration: 3 }, "-=2")

//     .from('contact', { x: 30, opacity: 0, duration: 3 }, "-=2")

//     .
// }

// new fullpage('#fullpage', {
//     autoScrolling: true,
//     scrollHorizontally: true,
//     navigation: true,

//     controlArrows: false,

//     onLeave: function(origin, destination, direction) {
//         if (destination.index == 0) {
//         console.log("home section")
//         heroSection(destination)
//     	} else if (destination.index == 1) {
//                     console.log("hero section")
//                     journeySection(destination)
//                 } else if (destination.index == 2) {
//                     console.log("journey section2")
//                     journey2Section(destination)
//                 } else if (destination.index == 3) {
//                     console.log("patron range1")
//                     Section(destination)
//                 } else if (destination.index == 4) {
//                     console.log("patron range2")
//                         //signupSection(destination)
//                 } else if (destination.index == 5) {
//                     console.log("patron range3")
//                         //imagesSection(destination)
//                 }
//             }