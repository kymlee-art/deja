const agaveImage = document.querySelector('.range4-image1')



const agaveTl = gsap.timeline({

    scrollTrigger: {
        trigger: ".range4-image1",
        start: "top top",
        end: "bottom bottom",
        scrub: "true",
        toggleActions: "restart pause reverse none"
    }
})

agaveTl.from('.range4-image1', { x: 500, duration: 2, ease: "power3.out" }, "-=.5");

//  hornets to move around the page
gsap.to('.range4-image', {
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


gsap.to('.range3-image--logo', {
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


gsap.to('.range4-image', {
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


gsap.to('.range4-image', {
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