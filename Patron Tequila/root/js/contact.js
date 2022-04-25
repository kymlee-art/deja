// get send button, message dialog and form
const sendBtn = document.querySelector('send-btn');
const messDialog = document.querySelector('.mess-dialog');
const hideForm = document.querySelector('#contact-form');

//set event listener
document.addEventListener(
    "click",
    function(event) {
        // If user either clicks X button  close form()
        if (
            event.target.matches(".send-btn") ||

            !event.target.closest(".mess-dialog")
        ) {
            closeForm()
        } {
            messDialog = "display"
        }
    },
    false
)

// event listener for send button on contact page.
document.addEventListener(
    "click",
    function(event) {
        // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
        if (
            event.target.matches(".send-btn") ||
            // when user clicks the send button close form
            !event.target.closest(".contact-form")
        ) {
            closeForm()
        }
    },
    false
)

function closeForm() {
    document.querySelector(".contact-form").contactForm = "none"
}

const slButton = document.querySelector('sl-button')
const dialog = document.querySelector('.Send')

slButton.addEventListener('click', () => dialog.show());


// // gsap motion path with svg

// gsap.registerPlugin(MotionPathPlugin);

// gsap.to(".hornet-img7 ", {
//     duration: 5,
//     repeat: 12,
//     repeatDelay: 3,
//     yoyo: true,
//     ease: "power1.inOut",
//     motionPath: {
//         path: "#path",
//         align: "#path",
//         autoRotate: true,
//         alignOrigin: [0.5, 0.5]
//     }
// });


// const contactTl = gsap.timeline()

// contactTl.from('.contact-image--main', { y: 250, duration: 3, repeat: "1", ease: "bounce", })
// contactTl.from('.contact-heading', { x: -550, duration: 3, repeat: "1", ease: "power4", })
// contactTl.from('.contact-hornet1', { x: -550, duration: 3, rotate: "360 deg", repeat: "1", ease: "power4", })
