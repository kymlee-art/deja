 //  hornets to move around the page
 gsap.to('.journey-image--hornet1', {
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

 //  hornets to move around the page
 gsap.to('.journey-image--hornet', {
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