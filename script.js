const cursorBox = document.getElementById("cursor-box");
function updateCursor(e) {
  cursorBox.style.left = `calc(${e.clientX}px)`;
  cursorBox.style.top = `calc(${e.clientY}px)`;
}

document.addEventListener("mousemove", (e) => {
  updateCursor(e);
});
