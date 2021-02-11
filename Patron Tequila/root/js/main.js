const tlHero = gsap.timeline()

tlHero.from('#hero-text, h1', { duration: 2.5, ease: "back.out(1.6)", x: -500 })
tlHero.from('.hero-image', { y: -500, duration: 2, ease: "bounce" }, "-=2.5")
tlHero.from('.modal-intro', 'yes', 'no', {
    x: -500,
    duration: 4,
    ease: "back.out(1.5)",
    x: -500
})