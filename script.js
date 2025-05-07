const sections = document.getElementsByTagName("section");
console.log(sections);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(`Section visible :`, entry.target);
      }
    });
  },
  { threshold: 0.5 } // Détecte quand au moins 50% de la section est visible
);

sections.forEach((section) => observer.observe(section));

for (let i = 0; i < sections.length; i++) {
  console.log(sections[i]);
  sections[i].addEventListener("scroll", (event) => {
    // scrollToSection(sections[i+1]);
    console.log(event);
  });
}
