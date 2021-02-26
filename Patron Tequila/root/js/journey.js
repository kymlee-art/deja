 const journeyTl = gsap.timeline()

 journeyTl.from('.range4-image--main', { y: 200, x: 200, duration: 2, repeat: "4" })
 journeyTl.to('.journey2-image--hornet1 ', { x: -500, x: 200, y: 150, duration: 3, rotate: "360deg", repeat: "10", ease: "sine.out", })
 journeyTl.to('.journey2-image--hornet2', { y: -350, y: 500, x: 150, duration: 3, rotate: "360deg", repeat: "10", ease: "sine.out", x: -500 })
     //  journeyTl.to('.journey2-main-text ', { x: -250,  duration: 3, repeat: "2", ease: "steps(n)", x: -200 })
     //  journeyTl.to('.journey2-text2 ', { x: -400,  duration: 3, repeat: "2", ease: "bounce", }, "-=2)



 const triggerDuration = 1000;


 //  //  hornets to move around the page
 gsap.to('.journey-image--hornet1', {
     duration: 1,
     xPercent: 500,
     rotation: 360,
     autoAlpha: 0,
     ease: "none",
     scrollTrigger: {
         trigger: '.parent',
         start: 'top top-=',
         end: "+=" + triggerDuration,
         //toggleActions: "play none none reverse",
         scrub: 1,
     }
 })

 //  hornets to move around the page
 gsap.to('.journey-image--hornet', {
     duration: 1,
     xPercent: 200,
     rotation: 360,
     autoAlpha: 0,
     ease: "none",
     scrollTrigger: {
         trigger: '.parent',
         start: 'top top-=',
         end: "+=" + triggerDuration,
         //toggleActions: "play none none reverse",
         scrub: 1,
     }
 })

 //  JOURNEY 2//

 const journeyT2 = gsap.timeline()
     //  Jimadoor man
 journeyT2.from('.range4-image--main', { y: 200, x: 200, duration: 2, repeat: "4" }, "-=1.5")
     // hornet logos to spin around 
 journeyT2.from('.journey2-content', { x: -150, duration: 3, ease: "sine.out", scale: 1 }, "+=2")
 journeyT2.to('.hornetlogo1', { x: -450, y: 350, x: 150, duration: 3, rotate: "360deg", repeat: "10", ease: "sine.out", x: -200 })
     // scale man image 'jimador'
 journeyT2.from('.journey-img1 ', { x: -50, duration: 2, ease: "power3.out", scale: "1" }, "-=.5");