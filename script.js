var crsr = document.querySelector("#cursor")
var blor = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blor.style.left = dets.x - 250 +"px"
    blor.style.top = dets.y - 250 +"px"
   
})

// document.addEventListener("mousemove", function(dets){
//     blur.style.left = dets.x+"px"
//     blur.style.top = dets.y+"px"
// })


gsap.registerPlugin(ScrollTrigger);
gsap.to("#nav",{
    backgroundColor :"#000",
    height: "80px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2

    }
})