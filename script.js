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

document.getElementById("generateBtn").onclick = () => {
  const now = new Date();
  if (hasGenerated && now < keyExpireTime) {
    alert("⛔ You have generated the key. Please wait 1 hour..");
    return;
  }

  const randomKey = possibleKeys[Math.floor(Math.random() * possibleKeys.length)];
  const finalKey = keyPrefix + randomKey;
  document.getElementById("keyDisplay").textContent = `Your Key: ${finalKey}`;
  hasGenerated = true;
  keyExpireTime = new Date(now.getTime() + 60 * 60 * 1000); // 1 jam
};
