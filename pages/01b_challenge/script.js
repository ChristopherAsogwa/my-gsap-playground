import gsap from "gsap";

gsap.to('.card', {
    boxShadow: "5px 10px 20px rgba(255, 230, 0, 0.8), 0 0 16px rgba(255, 230, 0, 0.6), 0 0 24px rgba(255, 230, 0, 0.4)",
    duration: 2,
    scale: 1.0,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #fff200, #fbc531)",
})