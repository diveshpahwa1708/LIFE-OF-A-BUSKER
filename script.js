gsap.to(".pg2 h1",{
    transform:"translateX(-65%)",
    scrollTrigger:{
        scroller:"body",
        trigger:".pg2",
        start:"top 0",
        end:"top -300%",
        scrub:2,
    pin:true
    }
})
gsap.to(".pg4 .img1, .pg4 .img2",{
    y:"-49rem",
    opacity:0,
    stagger:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg4 ",
        start:"top 5%",
        end:"top -100%",
        pin:true,
        scrub:3
    }
})
let tl=gsap.timeline();
tl.to(".loader",{
    delay:1,
    y:"-100vh",
    display:"none",
    duration:1
})
tl.from(".pg1 h1",{
    
    y:100,
    opacity:0,
    duration:1
})
tl.from("nav",{
    
    x:-100,
    opacity:0,
    
    duration:1
})
gsap.from(".pg3 p",{
    y:100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg3 p",
        start:"top 80%",
        end:"top 85%",
        scrub:3
    }
})
document.querySelector("#menu").addEventListener("click",()=>{
    let tl=gsap.timeline();
    tl.to("menu",{
        x:"-45vw",
        duration:1
    })
    tl.from("menu .nav, menu .nav2",{
        x:100,
        opacity:0,
        duration:1
    })
    tl.from("menu img",{
        scale:0,
        duration:1
    })
})
document.querySelector("#close").addEventListener("click",()=>{
    gsap.to("menu",{
        x:"45vw",
        duration:1
    })
})
gsap.from(".pg5 h1",{
    y:"-10vw",
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg5 h1",
        start:"top 30%",
        end:"top 40%",
        scrub:3
    }
})
gsap.from(".pg6 .img",{
    y:"-10vw",
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg6 .img",
        start:"top 30%"
    }
})