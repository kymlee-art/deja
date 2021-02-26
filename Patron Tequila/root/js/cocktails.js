const cocktailsTl = gsap.timeline({ delay: 0.5 })

cocktailsTl.from('.cocktail-image', { x: 0, opacity: 0, duration: 2.5, ease: "power4.out", stagger: 0.2 })
cocktailsTl.from('.image-main', { x: 400, duration: 4, ease: "slow", }, "-=1.5")
cocktailsTl.from('.image-2', { x: -150, duration: 8, repeat: "3", ease: "slow", }, "-=2")
cocktailsTl.from('.cocktail-header', { y: -150, duration: 8, repeat: "1", ease: "slow", }, "-=2")

// text slides in 
cocktailsTl.from('.cocktail-txt1 ', { x: -400, duration: 3, repeat: "1", ease: "bounce", }, "-=2.5")
cocktailsTl.from('.cocktail-txt2 ', { x: 400, duration: 3, repeat: "4", ease: "steps(n)", }, "-=3")
cocktailsTl.from('.cocktail-txt3 ', { x: -450, duration: 3, repeat: "4", ease: "power4", }, "-=3")
cocktailsTl.from('.cocktail-txt4 ', { x: 350, duration: 3, repeat: "4", ease: "elastic", }, "-=3")
cocktailsTl.from('.cocktail-txt5 ', { x: -550, duration: 3, repeat: "4", ease: "expo", }, "-=4")



const yMove = document.querySelector(".cocktail")

gsap.to(".cocktail-image", {
    delay: 0.5,
    duration: 2,
    stagger: 0.2,
    x: function(i, elem, boxes) {
        return i % 2 === 1 ? -yMove : yMove;
    }
});

// cocktail animations
gsap.to(".cocktail-image", {
    y: 100,
    stagger: { // wrap advanced options in an object
        each: 0.1,
        from: "edges",
        grid: "auto",
        ease: "power2.inOut",
        repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
    }
});
// scrollTrigger: {
// trigger: ".cocktail",
// start: "top top",
// end: "bottom bottom",
// scrub: "true",
// toggleActions: "restart pause reverse none"
// }

var hornet = gsap.utils.toArray('.hornet')
    // hornet patron logo, to rotate and trigger with scrolling

hornet.forEach((hornet, i) => {

    gsap.to('.hornet', {
        duration: 2,
        xPercent: 400,
        rotation: 360,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
            trigger: '.parent',
            start: 'top top-=',
            end: "+=",
            //toggleActions: "play none none reverse",
            scrub: 1,
        }
    })
})