gsap.registerPlugin(ScrollTrigger);

// gsap.to(".mongolia", {
//     x:0,
//     scrollTrigger:{
//         trigger:".content-interactive",
//         scrub:1,
//         start:"840% top",
//         end:"200%",
//         markers:true
//     }
// })

// let burger = gsap.timeline({
//     scrollTrigger: {
//         trigger:".content-hamburger-interactive",
//         scrub:7,
//         start:"930% top",
//         end:"bottom",
//         markers:true
//     }
// })
// burger.to(".hamburger-interactive-6", {
//     x:1110,
//     duration:12
// })
// const sections = gsap.utils.toArray('.content-hamburger-interactive').forEach((sectionBurger) => {
//     const burger = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionBurger,
//         pin: sectionBurger,
//         pinSpacing: true,
//         start: '900% top',
//         end: '1100% top',
//         markers:true
//       }
//     });
//   });

ScrollTrigger.create({
    trigger: '.content-hamburger-interactive',
    start: "top top",
    pin: true,
    end: "+=5000",
    pinSpacing: false,
    markers:false
})

// let tls = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".content-hamburger-interactive",
//       scrub: 2,
//       pin: true,
//       start: "900% top",
//       end: '1300%',
//       pinSpacing:false,
//       markers: true
//     }
//   });


let mongol = gsap.timeline({
    scrollTrigger: {
        trigger:".content-interactive",
        scrub:4,
        start:"750% top",
        end:"200%",
        markers:false
    }
})

mongol.to(".mongolia", {
    x:0,
    duration:6
})
mongol.to(".mongolia-heading", {
    x:0,
    scale: 1
})
mongol.to(".content-mongolia", {
    x:0,
    duration:10
})

let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".div1",
      scrub: 2,
      pin: true,
      start: "top top",
      end: '800%',
      markers: false
    }
  });

const t12 = gsap.timeline({
    scrollTrigger: {
        trigger: ".hamburger",
        scrub: 1,
        start: "top top",
        markers: false
    }
  });

t12
.to(".hamburger-body", {
    margin:-18,
    scrollTrigger:{
        start:"top top",
        scrub:1,
        end:"20%"
    }
})

t12.to(".text-1", {
    x:0,
    duration:10,
    delay:1.3,
    scrollTrigger: {
        start:"top top",
        scrub:1,
        end:"25%"
    }
})
t12.to(".text-2", {
    x:0,
    duration:10,
    delay:2.3,
    scrollTrigger: {
        start:"top top",
        scrub:1,
        end:"37%"
    }
})
t12.to(".text-3", {
    x:0,
    duration:10,
    delay:1.3,
    scrollTrigger: {
        start:"top top",
        scrub:1,
        end:"45%"
    }
})
t12.to(".text-4", {
    x:0,
    duration:10,
    delay:1.3,
    scrollTrigger: {
        start:"top top",
        scrub:1,
        end:"55%"
    }
})
t12.to(".text-5", {
    x:0,
    duration:10,
    delay:1.3,
    scrollTrigger: { 
        start:"top top",
        scrub:1,
        end:"67%"
    }
})
t12.to(".text-6", {
    x:0,
    duration:10,
    delay:1.3,
    scrollTrigger: {
        start:"top top",
        scrub:1,
        end:"80%"
    }
})


gsap.to(".header-banner", {
    scale:1,
    scrollTrigger:{
        trigger:".div1",
        scrub:5,
        start:"top top",
        end:"30%",
        markers:false,
    }
})
// const t13 = gsap.timeline({
//     y:0,
//     scrollTrigger: {
//         trigger: ".text-1",
//         scrub: true,
//         start: "top top",
//         markers: true
//     }
//   });

// tl.from(".layer-story-content-wrapper",{ 
//     margin
//     autoAlpha: 0, 
//     stagger: 0.5 
// },0)
// tl.to(".hamburger-body",{
//     margin:-18,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: ".hamburger-body",
//         start:"top top",
//         scrub:1,
//         end:'200px',
//         markers:true
//     }
// });


// tl.to(".text-1",{
//     y:0,
//     opacity:1,
//     stagger: 0.6,
//     scrollTrigger: {
//         trigger: ".text-1",
//         start:"top top",
//         scrub:1,
//         end:'200px',
//         markers:true
//     }
// },0.4);

// tl.to(".text-2",{
//     y:0,
//     opacity:1,
//     scrollTrigger: {
//         trigger: ".text-2",
//         start:"top top",
//         scrub:1,
//         end:'200px',
//         markers:true
//     }
// },10);

// gsap.to(".text-1", {
//     duration:8,
//     opacity:1,
//     x:0,
//     scrollTrigger: {
//         trigger: ".text-1",
//         start: "400% top",
//         end: "400% top",
//         scrub: 0.7,
//         markers: false
//     }
// })

// gsap.to(".text-2", {
//     duration:8,
//     opacity:1,
//     x:0,
//     scrollTrigger: {
//         trigger: ".text-2",
//         start: "490% top",
//         end: "490% top",
//         scrub: 0.7,
//         markers: false
//     }
// })

// gsap.to(".text-3", {
//     duration:8,
//     opacity:1,
//     x:0,
//     scrollTrigger: {
//         trigger: ".text-3",
//         start: "580% top",
//         end: "580% top",
//         scrub: 0.7,
//         markers: false
//     }
// })

// gsap.to(".text-4", {
//     duration:8,
//     opacity:1,
//     x:0,
//     scrollTrigger: {
//         trigger: ".text-4",
//         start: "670% top",
//         end: "670% top",
//         scrub: 0.7,
//         markers: false
//     }
// })

// gsap.to(".text-5", {
//     duration:8,
//     opacity:1,
//     x:0,
//     scrollTrigger: {
//         trigger: ".text-5",
//         start: "760% top",
//         end: "760% top",
//         scrub: 0.7,
//         markers: false
//     }
// })

// gsap.to(".text-6", {
//     duration:8,
//     opacity:1,
//     x:0,
//     scrollTrigger: {
//         trigger: ".text-6",
//         start: "850% top",
//         end: "850% top",
//         scrub: 0.7,
//         markers: false
//     }
// })

// let tl = gsap.timeline({
//     margin:0,
//     scrollTrigger: {
//       trigger: ".hamburger-body",
//       start: "160% center",
//       end: "190%",
//       toggleClass: "active",
//       markers:true
//     },
//   });