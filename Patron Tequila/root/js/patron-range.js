// move agave plant get agave plant
const agaveImage = document.querySelector('.range4-image1')


// PATRON RANGE 1
const patronRange1Tl = gsap.timeline()

//Patron Range 1 title to slide in
patronRange1Tl.from('.patron-range1', { x: -400, duration: 3, ease: "back.out(1.6)" })
    //Patron Range 1 make main slidein in on x axis and scale
patronRange1Tl.from('.range1-image-main', { x: 300, duration: 3, ease: "power.out4" }, "-=1.5")
    //hornet logo move around page on repeat
patronRange1Tl.from('.hornet', { y: 200, x: 150, duration: 3, rotate: "360deg", repeat: "10", ease: "sine.out", x: -200 })
patronRange1Tl.from('.hornet2', { y: -250, x: 150, y: 200, x: 300, duration: 3, rotate: "360deg", repeat: "10", ease: "sine.out", x: -200 })
patronRange1Tl.from('.range1-content', { x: 250, duration: 3, repeat: "1", ease: "sine.out", }, "+=2.5")
patronRange1Tl.to('.range1-side', { x: 100, duration: 3, repeat: "1", ease: "sine.out", }, "-=2")
patronRange1Tl.to('.range1-tag', { y: -50, duration: 2, repeat: "1", ease: "power.out4", }, "-=1.5")


// PATRON RANGE 2 //
const patronRange2Tl = gsap.timeline()

//Patron Range 1 title to slide in
patronRange2Tl.from('.range2-header', { y: -350, duration: 2, ease: "back.out(1.6)" }, "-=1.0")
    //Patron Range 1 make main slidein in on x axis and scale
patronRange2Tl.from('.range2-main-text', { y: -350, duration: 2, ease: "back.out(1.6)" }, "-=1.0")

patronRange2Tl.from('.range2-image--main', { x: -550, duration: 2, ease: "power.out4" }, "-=2.5")
patronRange2Tl.from('.range2-side', { x: 250, duration: 3, ease: "sine.out", })
patronRange2Tl.to('.range2-tag', { y: -50, duration: 2, repeat: "1", ease: "power.out4", }, "-=0.5")

// PATRON RANGE 3 //
const patronRange1T3 = gsap.timeline()

//Patron Range 1 title to slide in
patronRange1T3.from('.range3-header', { duration: 2.5, ease: "back.out(1.6)", x: -500 })
    //Patron Range 1 make main slide-in  on x axis and scale
patronRange1T3.from('.range3-text', { x: -550, duration: 2, ease: "power.out4" }, "-=2.5")
patronRange1T3.from('.range3-text2', { x: -250, duration: 2, ease: "power.out4" }, "-=2.5")
    //hornet logo move around page on repeat
patronRange1T3.from('.range3-image--logo', { y: -500, x: 150, duration: 3, rotate: "360deg", repeat: "10", ease: "sine.out", x: -200 })
patronRange1T3.from('.range2-subtitle', { x: 250, duration: 3, repeat: "1", ease: "elastic", })
patronRange1T3.from('.range3-image--main', { x: 100, duration: 2, repeat: "1", ease: "bounce", }, "-=1.5")
patronRange1T3.to('.range1-text', { y: -150, duration: 2, repeat: "1", ease: "power.out4", }, "-=0.5")


// PATRON RANGE 4 //

const patronRange4Tl = gsap.timeline()

//Patron Range 4 title to slide in
//Patron Range 4 make main slide-in  on y axis and scale

//hornet logo move around page on repeat
patronRange4Tl.from('.range4-title', { y: 200, x: 150, duration: 3, ease: "bounce" })
    // main text and side text to ease in
patronRange4Tl.from('.range4-main--text', { x: 250, duration: 3, repeat: "1", ease: "sine.out", })
patronRange4Tl.from('.range4-side', { x: 100, duration: 2, repeat: "1", ease: "sine.out", }, "-=0.5")
patronRange4Tl.from('.range4-image--main', { y: 250, x: 150, duration: 1, ease: "power.out4", })
    //hornet logo move around page on repeat
patronRange4Tl.from('.range4-hornet', { y: -250, duration: 2, rotate: "360", repeat: "1", ease: "power.out4", })
patronRange4Tl.from('.hornetlogo2', { y: 150, duration: 2, rotate: "360", repeat: "1", ease: "power.out4", })
patronRange4Tl.from('.hornet-logo1', { y: 150, x: -300, y: 150, x: -200, duration: 1, rotate: "360", repeat: "1", ease: "power.out4", })
    // agave plant to appear in
patronRange4Tl.from('.range4-agave', { x: 100, duration: 2, repeat: "1", ease: "power.out4", }, "-=0.5")



// set scroll trigger to move agave
const agaveTl = gsap.timeline({

    scrollTrigger: {
        trigger: ".range4-image1",
        start: "center centre",
        end: "bottom bottom",
        scrub: "true",
        toggleActions: "restart pause reverse none"
    }
})
