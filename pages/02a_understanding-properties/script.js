import gsap from "gsap";

gsap.to(".box", {
    rotation: 360,
    background: "#fff000",
    scale: 0.37,
    duration: 2,
    ease: 'power1.inOut',
    borderRadius: "50%",
    repeat: -1,
    yoyo: true,
    repeatDelay: 2,
    delay: 0.5,
    // paused: true,
    // stagger: 1,
})