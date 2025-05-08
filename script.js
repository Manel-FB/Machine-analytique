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
