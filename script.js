document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline();
    function animation() {  
      let menu = document.querySelector("nav .menu-icon");
      let menuCross = document.querySelector(".menu-content .cross .menu-cross");
  
      tl.to(".menu-content", {
        right: 0,
        duration: 0.7,
      });
  
      tl.from(".menu-content li a", {
        x: 150,
        opacity: 0,
        stagger: 0.2,
        duration: 0.4,
      });
  
      tl.from(menuCross, {
        x: 100,
        opacity: 0,
      });
  
      tl.pause();
  
      menu.addEventListener("click", () => {
        tl.play();
      });
      menuCross.addEventListener("click", () => {
        tl.reverse();
      });
    }
    animation();
  });
  