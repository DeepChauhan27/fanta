const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "50% 100%",
        scrub: 1, // enables smooth scrubbing
       // markers: true // shows start/end markers for debugging
    }
});

// Example animation
t1.to(".fanta", {
    top: "125%",
    left: "4%",
    width: "38vw",
},"orange")

t1.to(".slice-o", {
    top: "168%",
    left: "27%",
    width: "16vw",
},"orange")

t1.to(".leaf1", {
    top: "110%",
    left: "67%",
    rotate: 10,
},"orange")

t1.to(".leaf2", {
   top: "110%",
   left: "1%",
   rotate: -40,
},"orange")

t1.to(".orange", {
    top: "158%",
    left: "74%",
},"orange")
});

mm.add("(max-width: 799px)", () => {
    let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "50% 50%",
        scrub: 1, // enables smooth scrubbing
       // markers: true // shows start/end markers for debugging
    }
});

// Example animation
t1.to(".fanta", {
    top: "107%",
    left: "10%",
    width: "80vw",
},"orange")

t1.to(".slice-o", {
    top: "130%",
    left: "5%",
    width: "40vw",
},"orange")

t1.to(".leaf1", {
    top: "110%",
    left: "80%",
    rotate: 120,
},"orange")

t1.to(".leaf2", {
   top: "110%",
   left: "1%",
   rotate: -40,
},"orange")

t1.to(".orange", {
    top: "140%",
    left: "60%",
    width: "40vw",
},"orange")
});

let mm2 = gsap.matchMedia();

mm2.add("(min-width: 800px)", () => {
  let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "50% 50%",
        scrub: 1, // enables smooth scrubbing
        // markers: true,
    }
});

t2.from(".apple", {
    x: "-100%",
    y: "50%",
}, "orange")

t2.from(".a-can", {
    x: "-100%",
    y: "50%",
}, "orange")

t2.from(".sprite", {
    x: "100%",
    y: "50%",
}, "orange")

t2.from(".lemon", {
    x: "100%",
    y: "50%",
}, "orange")



t2.to(".fanta", {
    top: "219%",
    left: "35%",
    width: "30vw",
}, "orange");

t2.to(".slice-o", {
    top: "221%",
    left: "39%",
    width: "22vw",
}, "orange");
});

mm2.add("(max-width: 799px)", () => {
  let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".card:nth-child(1)",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        // marker: true
    }
  });

  t2.from(".apple", {
      x: "-100%",
      y: "50%",
  }, "orange");

  t2.from(".a-can", {
      x: "-100%",
      y: "50%",
  }, "orange");

  let t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".card:nth-child(2)",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        // marker: true
    }
  });
  t3.from(".respo-fanta", {
    x: "100%",
    y:"5 0%",
  }, "orange");
  
  t3.from(".respo-slice" ,{
       x: "100%",
      y: "50%",
  }, "orange")


  let t4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".card:nth-child(3)",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        // marker: true
    }    
    });
  t4.from(".sprite", {
      x: "-100%",
      y: "50%",
  }, "orange");

  t4.from(".lemon", {
      x: "-100%",
      y: "50%",
  }, "orange");
});
