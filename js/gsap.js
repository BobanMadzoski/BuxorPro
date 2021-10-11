gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.batch("div", {onEnter: batch => gsap.fromTo(batch, {duration:0.25 , opacity: 0, stagger: 0.1, y:100 }, {duration: 0.25, opacity: 1, stagger: 0.1, y: 0}), });