const tlCocktails = gsap.timeline({ delay: 0.5 })

tlCocktails.from('.cocktail-image', { x: 0, opacity: 0, duration: 2.5, ease: "power4.out", stagger: 0.2 })



const cocktailTl = gsap.timeline({

    scrollTrigger: {
        trigger: ".cocktail",
        start: "top top",
        end: "bottom bottom",
        scrub: "true",
        toggleActions: "restart pause reverse none"
    }
})

cocktailTl.from('.cocktail-3', { x: 1000, duration: 5, ease: "back.out(1.7)" });
cocktailTl.from('.cocktail-4', { x: 800, duration: 5, ease: "back.out(1.7)" }, "-=1.5");
cocktailTl.from('.cocktail-5', { x: 600, duration: 5, ease: "back.out(1.7)" });
cocktailTl.from('.cocktail-6', { x: -200, duration: 5, ease: "back.out(1.7)" }, "-=1.5");
cocktailTl.from('.cocktail-7', { x: 600, duration: 5, ease: "back.out(1.7)" });
cocktailTl.from('.cocktail-8', { x: -200, duration: 5, ease: "back.out(1.7)" }, "-=1.5");
cocktailTl.from('.cocktail-9', { x: 600, duration: 5, ease: "back.out(1.7)" });
cocktailTl.from('.cocktail-10', { x: -200, duration: 5, ease: "back.out(1.7)" }, "-=1.5");
cocktailTl.from('.cocktail-11', { x: 600, duration: 5, ease: "back.out(1.7)" });
cocktailTl.from('.cocktail-12', { x: -200, duration: 5, ease: "back.out(1.7)" }, "-=1.5");

var hornet = gsap.utils.toArray('.hornet')

gsap.registerPlugin(ScrollTrigger);

const spaceBetween = 5000;
const triggerDuration = 1000;

boxes.forEach((hornet, i) => {

    gsap.to('.hornet', {
        duration: 1,
        xPercent: 400,
        rotation: 360,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
            trigger: '.parent',
            start: 'top top-=' + spaceBetween * i,
            end: "+=" + triggerDuration,
            //toggleActions: "play none none reverse",
            scrub: 1,
        }
    })
})