// تحليل الفيديو
document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const file = document.getElementById("videoFile").files[0];
  const topic = document.getElementById("topic").value.trim();
  const resultBox = document.getElementById("resultBox");

  if (!file || !topic) {
    alert("يرجى رفع فيديو وكتابة وصف.");
    return;
  }

  const formData = new FormData();
  formData.append("video", file);
  formData.append("topic", topic);

  resultBox.innerHTML = "⏳ جاري التحليل...";
  resultBox.classList.remove("hidden");

  fetch("https://YOUR-BACKEND-URL.onrender.com/analyze", {
    method: "POST",
    body: formData,
  })
    .then(res => res.json())
    .then(data => {
      resultBox.innerHTML = `
📹 المدة: ${data.duration}
🎥 الدقة: ${data.resolution}
🔊 صوت؟ ${data.audio}
⭐ نسبة الانتشار: ${data.score}/100

🎯 هوك مقترح:
${data.hook}

🛠️ نصيحة:
${data.tip}
      `;
    })
    .catch(() => {
      resultBox.innerHTML = "❌ خطأ في الاتصال بالخادم.";
    });
});

// توليد الكابتشن (محلي مؤقتًا)
document.getElementById("captionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const topic = document.getElementById("captionTopic").value.trim();
  const tone = document.getElementById("tone").value;
  const length = document.getElementById("length").value;
  const result = document.getElementById("captionResult");

  result.classList.remove("hidden");
  result.innerText = `✍️ كابتشن (${tone} - ${length}):

${topic} ... لا تفوّت التفاصيل – خلك جاهز للمفاجأة!`;
});

// توليد الهاشتاقات (محلي مؤقتًا)
document.getElementById("hashtagForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const topic = document.getElementById("hashtagTopic").value.trim();
  const result = document.getElementById("hashtagResult");

  result.classList.remove("hidden");
  result.innerText = `📌 هاشتاقات مقترحة:
#${topic.replace(/\\s+/g, '')}
#${topic.split(" ")[0]}
#محتوى_${topic.slice(0, 3)}
#فيديو_${new Date().getFullYear()}`;
});