 const journeyTl = gsap.timeline()

 journeyTl.from('.range4-image--main', { y: 200, x: 200, duration: 2, repeat: "4" })
 journeyTl.to('.hornetlogo', { x: -500, x: 200, y: 150, duration: 3, rotate: "360deg", repeat: "10", ease: "sine.out", })
 journeyTl.to('.hornetlogo2', { y: -350, y: 500, x: 150, duration: 3, rotate: "360deg", repeat: "10", ease: "sine.out", x: -500 })



 //  const triggerDuration = 1000;


 //  //  //  hornets to move around the page
 //  gsap.to('.journey-image--hornet1', {
 //      duration: 1,
 //      xPercent: 500,
 //      rotation: 360,
 //      autoAlpha: 0,
 //      ease: "none",
 //      scrollTrigger: {
 //          trigger: '.parent',
 //          start: 'top top-=',
 //          end: "+=" + triggerDuration,
 //          //toggleActions: "play none none reverse",
 //          scrub: 1,
 //      }
 //  })

 //  //  hornets to move around the page
 //  gsap.to('.journey-image--hornet', {
 //      duration: 1,
 //      xPercent: 200,
 //      rotation: 360,
 //      autoAlpha: 0,
 //      ease: "none",
 //      scrollTrigger: {
 //          trigger: '.parent',
 //          start: 'top top-=',
 //          end: "+=" + triggerDuration,
 //          //toggleActions: "play none none reverse",
 //          scrub: 1,
 //      }
 //  })

 //  JOURNEY 2//

 const journeyT2 = gsap.timeline()
     //  Jimadoor man
 journeyT2.from('.range4-image--main', { y: 200, x: 200, rotate: '50deg', duration: 2, repeat: "4" })
     // hornet logos to spin around 
 journeyT2.from('.', { x: -450, x: 250, y: 150, duration: 3, rotate: "360deg", repeat: "10", ease: "sine.out", x: -200 })
 journeyT2.to('.hornetlogo1', { x: -450, y: 350, x: 150, duration: 3, rotate: "360deg", repeat: "10", ease: "sine.out", x: -200 })
     // scale man image 'jimador'
 journeyT2.from('.journey-img1 ', { x: -50, duration: 2, ease: "power3.out", scale: "1" }, "-=.5");