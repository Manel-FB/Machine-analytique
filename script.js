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

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");

const sections = gsap.utils.toArray(".container section");
const sectionWidth = sections[0].offsetWidth;

const scrollSpeedCoeff = 0.85;

const containerWidth = sectionWidth * (sections.length - 1);

let scrollTween = gsap.to(sections, {
  x: -sectionWidth * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => containerWidth * scrollSpeedCoeff,
  },
});

gsap.fromTo(
  ".bg-img-wrapper img",
  { x: -300 },
  {
    x: 300,
    ease: "none",
    scrollTrigger: {
      trigger: ".bg-img-wrapper",
      start: "bottom bottom",
      end: () =>
        `+=${
          ((containerWidth * scrollSpeedCoeff) / sections.length) * 2
        }px bottom`,
      scrub: 1,
    },
  }
);
