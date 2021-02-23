const tlHero = gsap.timeline()

tlHero.from('#hero-text, h1', { duration: 2.5, ease: "back.out(1.6)", x: -500 })
tlHero.from('.hero-image', { y: -500, duration: 2, ease: "bounce" }, "-=2.5")
tlHero.from('.modal-intro', {
    x: -500,
    duration: 4,
    ease: "back.out(1.5)",
    // x: -1500
})



//SCROLLING BETWEEN SECTIONS -GSAP Scroll Trigger 


const tlsectionHero = gsap.timeline({
    delay: 0.5,
    scrolltrigger: {
        trigger: '.section-hero'
    }

})






//Scroll from hero page to 
function sectionHero() {
    console.log("Hero")

    // gsap scroll timeline and set delay to 0.5s
    const t1 = new TimelineMax({ delay: 0.5 })

    t1.from('.hero', { bottom: "50%", top: "50%", duration: 0.5 })
        // set at 50% duration of 0.5s
        .from('.journey', { x: -800, duration: 1.5, ease: 'power.out4', opacity: 0, s })

    .from('journey2', { y: 30, opacity: 0, duration: 3 }, "-=1")

    // .from('.placeholder', {scale: 0, opacity: 0, duration: 0.7}, '-=1.1')
    .from('patron-range1', { x: 30, opacity: 0, duration: 3 }, "-=2")
        .from('patron-range2', { x: 30, opacity: 0, duration: 3 }, "-=2")
        .from('patron-range3', { x: 30, opacity: 0, duration: 3 }, "-=2")
        .from('patron-range4', { x: 30, opacity: 0, duration: 3 }, "-=2")

    .from('cocktails', { y: 30, opacity: 0, duration: 3 }, "-=2")

    .from('contact', { x: 30, opacity: 0, duration: 3 }, "-=2")
}

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
//             },