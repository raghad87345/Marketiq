window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.opacity = "0";
    document.getElementById("splash").style.display = "none";
    const main = document.getElementById("main-content");
    main.classList.remove("hidden");
    main.classList.add("fade-in");
  }, 2000);
});

// تحليل الفيديو – مثال بسيط
document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const result = document.getElementById("resultBox");
  result.classList.remove("hidden");
  result.innerText = "🔍 تحليل الفيديو:\n⏱️ المدة: 12 ثانية\n🎥 دقة: 1080p\n⭐ نسبة الانتشار: 87%";
});

// توليد الكابتشن
document.getElementById("captionForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const topic = document.getElementById("captionTopic").value;
  const tone = document.getElementById("tone").value;
  const length = document.getElementById("length").value;
  const result = document.getElementById("captionResult");
  result.classList.remove("hidden");
  result.innerText = `✍️ كابتشن (${tone} - ${length}):\n${topic} ... خلك مستعد للدهشة!`;
});

// توليد الهاشتاقات
document.getElementById("hashtagForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const topic = document.getElementById("hashtagTopic").value;
  const result = document.getElementById("hashtagResult");
  result.classList.remove("hidden");
  result.innerText = `📌 هاشتاقات:\n#${topic.replace(/\\s+/g, '')}\n#${topic.split(" ")[0]}\n#تسويق_${topic.slice(0,3)}`;
});