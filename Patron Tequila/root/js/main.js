const tlHero = gsap.timeline()

//hero text h1 
tlHero.from('#hero-text, h1', { duration: 2.5, ease: "back.out(1.6)", x: -500 })
    //Hero image make it bounce in on y axis
tlHero.from('.hero-image', { y: -500, duration: 2, ease: "bounce" }, "-=2.5")
    //hornet logo move around page on repeat
tlHero.from('.hornet1', { y: 200, x: 150, duration: 3, rotate: "360deg", repeat: "10", ease: "sine.out", x: -200 })
tlHero.from('.hornet2', { x: 250, y: 250, duration: 3, repeat: "10", rotate: "360deg", ease: "sine.out", x: -300 })
    // modal intro make 
tlHero.from('.modal-intro', {
    x: -500,
    duration: 1,

})




// OPEN MESSAGE SENT DIALOG // 

const modalIntro = document.querySelector('.model-intro');
const yesButton = document.querySelector('.modal-yes');
const noButton = document.querySelector('.modal-no');
// yesButton.addEventListener('click', () => modalIntro.hide());

document.addEventListener(
        "click",
        function(event) {
            // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
            if (
                event.target.matches(".modal-yes") ||
                event.target.matches(".modal-no") ||
                !event.target.closest(".modal-intro")
            ) {
                closeModal()
            }
        },
        false
    )
    // function to close modal
function closeModal() {
    document.querySelector(".modal-intro").style.display = "none"
}


// SCROLL THROUGH SECTIONS

gsap.registerPlugin(ScrollTrigger)
    // create a sequence that moves to the sections of the site in from different directions 
const tl = gsap.timeline();
// tl.from(".section-hero", { xPercent: 100, ease: 'slow' })
tl.from(".section-journey", { xPercent: 100 })
    .from(".section-journey2", { yPercent: -100 })
    .from(".section-range1", { xPercent: 100 })
    .from(".section-range2", { yPercent: -100 })
    .from(".section-range3", { xPercent: 100 })
    .from(".section-range4", { yPercent: -100 });

// get wrapper
const sectionCount = document.querySelectorAll('#wrapper > section').length

// pin the container and link the animation to the scrollbar (scrub: true). 
ScrollTrigger.create({
    animation: tl,
    trigger: '#wrapper',
    start: 'top top',
    end: `+=${window.innerHeight * sectionCount}`,
    scrub: true,
    pin: true,
    anticipatePin: 1

})