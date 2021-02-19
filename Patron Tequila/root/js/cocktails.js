const aboutTl = gsap.timeline({

    scrollTrigger: {
        trigger: ".cocktails-img ",
        start: "top center",
        end: "bottom bottom",
        scrub: "true",
        toggleActions: "restart pause reverse none"
    }
})

aboutTl.to('.cocktail3', { x: 900, y: 400, duration: 5, ease: "back.out(1.7)" })
aboutTl.to('.cocktail-4', { x: -900, y: 400, duration: 5, ease: "back.out(1.7)" }, "-=1.5")