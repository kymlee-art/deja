const aboutTl = gsap.timeline({

    scrollTrigger: {
        trigger: ".cocktails-img ",
        start: "top center",
        end: "bottom bottom",
        scrub: "true",
        toggleActions: "restart pause reverse none"
    }
})

aboutTl.to('.cocktail-3', { x: 100, duration: 5, ease: "back.out(1.7)" })
aboutTl.to('.cocktail-4', { x: -200, duration: 5, ease: "back.out(1.7)" }, "-=1.5")