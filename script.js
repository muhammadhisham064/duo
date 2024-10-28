// function cursor(){
  

// }
let crsr=document.querySelector(".cursor")
let main=document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    gsap.to(crsr, {
        x: dets.x + 20+"px",
        y: dets.y + 20+"px",
        duration:1,
        ease:"back.out"
      });
})

// var crsr = document.querySelector(".cursor")
// var main = document.querySelector(".main")
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x + 20+"px"
//     crsr.style.top = dets.y + 20+"px"
// })
// let vid_crsr=document.querySelector("#video-cursor")
// let vid=document.querySelector(".main")
// vid.addEventListener("mouseenter",function(dets){
//     gsap.to(vid_crsr, {
//         x: dets.x,
//         y: dets.y,
//         duration:1,
//         ease:"back.out"
//       });
// })


let video=document.querySelector(".page2 video")

let isMobile = window.innerWidth <= 768; // Check if the screen is mobile size

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "body",
        markers: false,
        start: isMobile ? "top top%" : "top 27%",
        end: isMobile ? "bottom 5%" : "bottom 10%",
        scrub: 3
    }
});

// Animation for h1, h2, and video
tl.to("#page1 h1", { x: isMobile ? -50 : -100 }, "anim");
tl.to("#page1 h2", { x: isMobile ? 50 : 100 }, "anim");
tl.to("#page1 video", { width: isMobile ? "80%" : "90%" }, "anim");

// Timeline for background color change
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "body",
        markers:false,
        start: "top -50%",  // Adjust as needed
        end: "top -10%",   // Adjust as needed
        scrub: 3
    }
});

tl2.to(".main", {
    backgroundColor: "#fff"
});



let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects",
        scroller: "body",
        markers:false,
        start: "top 100%",  // Adjust as needed
        end: "top 100%%",   // Adjust as needed
        scrub: 3
    }
});

tl3.to(".main", {
    backgroundColor: "#000"
});




var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})


// var h4 = document.querySelectorAll("#nav h4")
// var purple = document.querySelector("#purple")
// h4.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         purple.style.display = "block"   
//         purple.style.opacity = "1"
//     })
//     elem.addEventListener("mouseleave",function(){
//         purple.style.display = "none"   
//         purple.style.opacity = "0"
//     })
// })
