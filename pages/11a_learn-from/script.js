import gsap from "gsap";

const button = document.querySelector('.repeat');


const animation = gsap.from('.card', {
    y: 100,
    opacity: 0,
    duration: 0.9,
    ease: 'sine.out',
    stagger: 0.3,
})

button.addEventListener('click', () => {
    animation.restart();
})