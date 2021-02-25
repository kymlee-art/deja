const cocktailsTl = gsap.timeline({ delay: 0.5 })

cocktailsTl.from('.cocktail-image', { x: 0, opacity: 0, duration: 2.5, ease: "power4.out", stagger: 0.2 })
cocktailsTl.from('.image-main', { x: 100, duration: 5, ease: "slow", }, "-=2.5")
cocktailsTl.from('.image-2', { x: -50, duration: 8, repeat: "1", ease: "slow", }, "-=2.5")
cocktailsTl.from('.cocktail-header', { y: -150, duration: 8, repeat: "1", ease: "slow", }, "-=2.5")


const cocktaislTl = gsap.timeline({

    scrollTrigger: {
        trigger: ".cocktail",
        start: "top top",
        end: "bottom bottom",
        scrub: "true",
        toggleActions: "restart pause reverse none"
    }
})

// cocktailsTl.from('.cocktail-3', { x: 300, duration: 5, ease: "back.out(1.7)" });
// cocktailsTl.from('.cocktail-4', { x: 300, duration: 5, ease: "back.out(1.7)" }, "-=1.5");
// cocktailsTl.from('.cocktail-5', { x: 600, duration: 5, ease: "back.out(1.7)" });
// cocktailsTl.from('.cocktail-6', { x: -200, duration: 5, ease: "back.out(1.7)" }, "-=1.5");
// cocktailsTl.from('.cocktail-7', { x: 600, duration: 5, ease: "back.out(1.7)" });
// cocktailsTl.from('.cocktail-8', { x: -200, duration: 5, ease: "back.out(1.7)" }, "-=1.5");
// cocktailsTl.from('.cocktail-9', { x: 600, duration: 5, ease: "back.out(1.7)" });
// cocktailsTl.from('.cocktail-10', { x: -200, duration: 5, ease: "back.out(1.7)" }, "-=1.5");
// cocktailsTl.from('.cocktail-11', { x: 600, duration: 5, ease: "back.out(1.7)" });
// cocktailsTl.from('.cocktail-12', { x: -200, duration: 5, ease: "back.out(1.7)" }, "-=1.5");

var hornet = gsap.utils.toArray('.hornet')

const spaceBetween = 5000;


hornet.forEach((hornet, i) => {

    gsap.to('.hornet', {
        duration: 2,
        xPercent: 400,
        rotation: 360,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
            trigger: '.parent',
            start: 'top top-=' + spaceBetween,
            end: "+=" + triggerDuration,
            //toggleActions: "play none none reverse",
            scrub: 1,
        }
    })
})