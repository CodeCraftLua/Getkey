const keyPrefix = "CodeCraftLuaKey_";
const possibleKeys = [
  "D16pDiH2heS32J6", "GtoulAzqiIsw8rm", "lt4Hl7GCrars5Nk", "MadeBtl7gaxGOS1",
  "OUqvSVb9Oyn8tTa", "RMdfh2v7zERkDJA", "nUVBUo01xWn0ocx", "NzQ1YoSeR99Uu6n",
  "meT5FOsr4EW5LMR", "Ye5r4yqAQm29IKI", "OWoSUGJsw8KhgS5", "kYBMrT1eC6DmcB2",
  "qyDKzINBeaZbNoP", "rWM5CiKehOAVtjc", "QJuidkVwCX8IZLV", "YgSzsCHciYpEmHb",
  "wuOIOaWTbtwB9DK", "p6EwjxKaWsWXeMd", "kFKpkSPnonpDraX", "FVqxJVYgzYdqjuM",
  "V5822B1KdbW8mCT", "cMKfpfn26abHcbr", "9q6QADYon8r3ZqG", "oa3bBfdmBREfsOA",
  "yZnsypKFZn5z7Vi", "GJx5MUe80QkN8kf", "xv1sSlP5eyc33bA", "tdI4F1Btqml7NrA",
  "JD5j7L57hpceySE", "p1LjEhfmuE5vzbw"
];

let hasGenerated = false;
let keyExpireTime = null;

const copyBtn = document.getElementById("copyBtn");

document.getElementById("generateBtn").onclick = () => {
  const now = new Date();
  if (hasGenerated && now < keyExpireTime) {
    alert("⛔ You have generated the key. Please wait 1 hour.");
    return;
  }

  const randomKey = possibleKeys[Math.floor(Math.random() * possibleKeys.length)];
  const finalKey = keyPrefix + randomKey;
  document.getElementById("keyDisplay").textContent = `Your Key: ${finalKey}`;
  copyBtn.style.display = "inline-block";
  copyBtn.setAttribute("data-key", finalKey);
  hasGenerated = true;
  keyExpireTime = new Date(now.getTime() + 60 * 60 * 1000);
};

copyBtn.onclick = () => {
  const key = copyBtn.getAttribute("data-key");
  navigator.clipboard.writeText(key).then(() => {
    copyBtn.textContent = "✅ Copied!";
    setTimeout(() => {
      copyBtn.textContent = "📋 Copy Key";
    }, 1500);
  }).catch(err => {
    alert("❌ Failed to copy key.");
  });
};

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+[]{}|;:',.<>?".split("");
let fontSize = 14;
let columns = canvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#8a2be2";
  ctx.font = fontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);
