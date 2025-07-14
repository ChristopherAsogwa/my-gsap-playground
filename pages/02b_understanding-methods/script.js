import gsap from "gsap";

const animate = gsap.to(".box", {
    opacity: 1,
    rotation: 360,
    borderRadius: "50%",
    scale: 1.25,
    duration: 2
})

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");
const repeat = document.querySelector(".repeat");

play.addEventListener("click", () => {
    animate.play();
})

pause.addEventListener("click", () => {
    animate.pause();
})

resume.addEventListener("click", () => {
    animate.resume();
})

restart.addEventListener("click", () => {
    animate.restart();
})

reverse.addEventListener("click", () => {
    animate.reverse();
})

kill.addEventListener("click", () => {
    animate.kill();
})

yoyo.addEventListener("click", () => {
    animate.yoyo(true);
})

repeat.addEventListener("click", () => {
    animate.repeat(3);
})

