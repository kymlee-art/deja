const aboutTl = gsap.timeline({

    scrollTrigger: {
        trigger: ".cocktails ",
        start: "top center",
        end: "bottom bottom",
        scrub: "true",
        toggleActions: "restart pause reverse none"
    }
})

aboutTl.to('.cocktail-1', { x: 900, y: 400, duration: 5, ease: "back.out(1.7)" })
aboutTl.to('.cocktail-2', { x: -900, y: 400, duration: 5, ease: "back.out(1.7)" }, "-=1.5")