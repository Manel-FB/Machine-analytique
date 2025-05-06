const sections = document.getElementsByTagName('section');

for (let i; i < sections.length; i++) {
    sections[i].addEventListener('scroll', (event) => {
        scrollToSection(sections[i+1]);
    });
}