const cursorBox = document.getElementById("cursor-box");
function updateCursor(e) {
  cursorBox.style.left = `${e.clientX}px`;
  cursorBox.style.top = `${e.clientY}px`;
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

const scrollArrow = document.querySelector(".scroll-arrow");
scrollArrow.addEventListener("mousedown", () => {
  gsap.scrollTo("#first-section");
});

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");

const sections = gsap.utils.toArray(".container section");
const sectionWidth = sections[0].offsetWidth;

const scrollSpeedCoeff = 0.85;

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => container.offsetWidth * scrollSpeedCoeff,
  },
});

gsap.fromTo(
  ".bg-img-wrapper img",
  { x: -100 },
  {
    x: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".bg-img-wrapper",
      start: "top top",
      end: () => `${container.offsetWidth * scrollSpeedCoeff}px bottom`,
      scrub: 1,
    },
  }
);
