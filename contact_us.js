document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const mailto = `mailto:tonmail@example.com?subject=Contact%20depuis%20le%20formulaire&body=Nom:%20${encodeURIComponent(
    name
  )}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%0A${encodeURIComponent(
    message
  )}`;

  window.location.href = mailto;
});
