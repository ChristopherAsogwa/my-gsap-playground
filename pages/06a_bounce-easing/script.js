import gsap from "gsap";

const circle = document.querySelector(".circle");

// bounces as it enters
// gsap.to(circle, {
//     duration: 1.5,
//     repeat: -1,
//     yoyo: true,
//     ease: 'bounce.in',
//     y: 100,
// })

// bounces as it finishes
// gsap.to(circle, {
//     duration: 1.5,
//     repeat: -1,
//     yoyo: true,
//     ease: 'bounce.out',
//     y: 100,
// })

// Bounces at both sides
// gsap.to(circle, {
//     duration: 1.5,
//     repeat: -1,
//     yoyo: true,
//     ease: 'bounce.inOut',
//     y: 100,
// })