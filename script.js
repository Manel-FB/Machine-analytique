const cursorBox = document.getElementById("cursor-box");
function updateCursor(e) {
  cursorBox.style.left = `calc(${e.clientX}px)`;
  cursorBox.style.top = `calc(${e.clientY}px)`;
}

document.addEventListener("mousemove", (e) => {
  updateCursor(e);
});

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    cursorBox.style.transform = "translate(-50%, -50%) scale(150%)";
  });

  link.addEventListener("mouseleave", (e) => {
    cursorBox.style.transform = "translate(-50%, -50%) scale(100%)";
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const container = document.querySelector(".container");
  const sections = gsap.utils.toArray(".container section");

  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 0.5,
      end: "+=1500",
    },
  });
});
