// تحليل الفيديو
document.getElementById('analyzeForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const file = document.getElementById('videoInput').files[0];
  const result = document.getElementById('videoResult');

  if (!file || !file.type.startsWith("video")) {
    result.innerText = "⚠️ يرجى رفع فيديو صالح.";
    result.classList.remove("hidden");
    return;
  }

  const sizeMB = (file.size / 1024 / 1024).toFixed(2);
  const analysis = sizeMB < 5
    ? "✅ الفيديو ممتاز للمنصات القصيرة. اجذب الانتباه في أول 3 ثواني!"
    : "⚠️ الفيديو طويل نسبيًا، حاول اختصاره للحصول على تفاعل أعلى.";

  result.innerHTML = `📂 الحجم: ${sizeMB} MB<br><strong>${analysis}</strong>`;
  result.classList.remove("hidden");
});

// توليد الكابتشن
function generateCaption() {
  const topic = document.getElementById("captionInput").value.trim();
  const tone = document.getElementById("tone").value;
  const length = document.getElementById("length").value;
  const result = document.getElementById("captionResult");

  if (!topic) {
    alert("يرجى كتابة محتوى الفيديو.");
    return;
  }

  let toneText = "";
  if (tone === "تحفيزية") toneText = "💪 استمر، أنت على الطريق الصحيح.";
  if (tone === "معلوماتية") toneText = "🧠 محتوى مفيد، لا يفوتك.";
  if (tone === "خفيفة") toneText = "😄 محتوى خفيف وظريف!";
  if (tone === "رسمية") toneText = "✅ شرح موثوق وبأسلوب واضح.";

  let close = "";
  if (length === "قصير") close = "📌 لا تنسى تحفظ الفيديو.";
  if (length === "متوسط") close = "📌 شارك رأيك وساهم بالنقاش.";
  if (length === "طويل") close = "📌 اكتب تعليق، وشارك الفيديو مع المهتمين.";

  result.innerText = `🎬 ${topic}\n${toneText}\n${close}`;
  result.classList.remove("hidden");
}

// توليد الهاشتاقات
function generateHashtags() {
  const topic = document.getElementById("hashtagInput").value.toLowerCase();
  const platform = document.getElementById("platform").value;
  const result = document.getElementById("hashtagResult");

  let tags = ["#محتوى", "#ابداع", "#فيديو"];

  if (topic.includes("تسويق")) tags.push("#تسويق", "#تسويق_رقمي");
  if (topic.includes("طبخ")) tags.push("#طبخ", "#اكل");
  if (topic.includes("تعليم")) tags.push("#تعليم", "#معلومة");
  if (topic.includes("تحفيز")) tags.push("#تحفيز", "#تطوير_الذات");

  if (platform === "تيك توك") tags.push("#foryou", "#fyp");
  if (platform === "إنستقرام") tags.push("#explore", "#reels");

  result.innerText = tags.join(" ");
  result.classList.remove("hidden");
}