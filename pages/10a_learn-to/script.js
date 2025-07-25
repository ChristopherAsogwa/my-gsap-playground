import gsap from "gsap";

const showToastLoop = () => {
    gsap.to('.toast', {
        y: -120,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out', //power.out will be better here but will be more aggressive
        onComplete: () => {
            gsap.to('.toast', {
                delay: 2.5,
                y: 0,
                opacity: 0,
                scale: 0.95,
                duration: 0.7,
                ease: 'sine.in', //power4.in can be a good usage but will be more aggressive, fast
                onComplete: () => {
                    setTimeout(showToastLoop, 2500);
                }
            })
        }
    })
}

showToastLoop();