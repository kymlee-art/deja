const slButton = document.querySelector('sl-button')
const dialog = document.querySelector('.mess-sent')

slButton.addEventListener('click', () => dialog.show());



//  hornets to move around the page
gsap.to('.hornet-image', {
    duration: 1,
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