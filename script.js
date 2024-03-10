let Loader = function(){

    let a = 0
    setInterval(function(){

        a = a + Math.floor(Math.random()*10);

        if(a<100){
        document.querySelector("#loader h1").innerHTML= a + "%";}
        else {
            a=100;
            document.querySelector("#loader h1").innerHTML= a + "%";
        }

    },80)
}

// Loader()





var tl= gsap.timeline()

tl.to("#loader h1",{

scale: 1.5,
delay:0.5,
duration:1,
onStart : Loader()

})




tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1.5
})



gsap.to("#page1 h1",{

    transform: "translateX(-150%)",
    fontWeight: "50",
    scrollTrigger: {

        trigger: "#page1",
        scroller: "body",
        // markers:true,
        start:"top 0",
        end: "top -200%",
        scrub:5,
        pin:true 
        //Allows for the completion of the scroll before we can go ahead, GODDAMNN

    }
})