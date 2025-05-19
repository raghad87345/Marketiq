// هذا الكود يحول المستخدم إلى صفحة التواصل عند الضغط على زر
function goToContact() {
  window.location.href = "contact.html";
}

// مثال: عرض رسالة عند إرسال نموذج (لو كان فيه form)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("تم إرسال البيانات بنجاح. سنتواصل معك قريبًا.");
      form.reset();
    });
  }
});// هذا الكود يحول المستخدم إلى صفحة التواصل عند الضغط على زر
function goToContact() {
  window.location.href = "contact.html";
}

// مثال: عرض رسالة عند إرسال نموذج (لو كان فيه form)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("تم إرسال البيانات بنجاح. سنتواصل معك قريبًا.");
      form.reset();
    });
  }
});
