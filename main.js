window.addEventListener("load", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash");
    const main = document.getElementById("main-content");
    if (splash && main) {
      splash.style.display = "none";
      main.style.display = "block";
    }
  }, 2000);
});

function redirectToContact() {
  window.location.href = "contact.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("تم إرسال بياناتك بنجاح. سنتواصل معك قريبًا.");
      form.reset();
    });
  }
});