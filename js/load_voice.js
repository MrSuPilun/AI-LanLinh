var voice = new Audio();
var num;
var str;
var isOnVoice = true;

const layHoi = [
  "AI-V-Lấy-hơi",
  "AI-V-Lấy-hơi-1",
  "AI-V-Lấy-hơi-2",
  "AI-V-Lấy-hơi-3",
];

const first_angry = [
  "AI-Bị-mất-một-cái-càng-chưa-tởn-hả-muốn-bị-mất-hai-cái-đúng-không",
  "AI-Bực-bội-ghê-luôn-á",
  "AI-Bực-bội",
  "AI-Cái-gì",
  "AI-Cái-gì-1",
  "AI-Mấy-con-cua-chán-sống-rồi-đúng-ko",
  "AI-Mấy-người-này-kỳ-cục-ghê-á",
  "AI-Quánh-chết-bây-giờ",
  "AI-Thứ-gì-đâu-á",
  "AI-Tức-a",
  "AI-Tức",
  "AI-Tui-ghim-mấy-người-rồi-đó",
  "AI-Nghĩ-sao",
  "AI-O-o",
  "AI-Oh",
  "AI-Oh-1",
  "AI-Ooo",
  "AI-Ooo-1",
  "AI-Ooo-2",
  "AI-Ooo-3",
  "AI-Ooo-4",
  "AI-Ooo-5",
  "AI-Ooo-6",
  "AI-Ooo-7",
  "AI-Ooo-8",
];

const huh = [
  "AI-Huh",
  "AI-Huh-1",
  "AI-Huh-2",
  "AI-Huh-3",
  "AI-Huh-4",
  "AI-Huh-5",
  "AI-Huh-6",
];

const angry = [
  {
    tag: "sân bay tân sơn nhất",
    negative: ["AI-Sân-bay-tân-sơn-nhất", "AI-Quý-cô-sân-bay-tân-sơn-nhất"],
    responses: ["AI-Người-ta-boing-boing-như-z", "AI-Sân-bay-cái-j-mà-sân-bay"],
  },
  {
    tag: "sân bay",
    negative: ["AI-Sân-bay-cái-j-mà-sân-bay"],
    responses: ["AI-Người-ta-boing-boing-như-z"],
  },
  {
    tag: "con lùn",
    negative: ["AI-Con-lùn", "AI-Cái-gì-lùn-mà-lùn"],
    responses: [
      "AI-Hơi-bị-cao",
      "AI-Ko-biết-về-chiều-cao-j-hết",
      "AI-Nghĩ-sao-người-ta-cao-mà-chê-lùn",
    ],
  },
  {
    tag: "thớt",
    negative: ["AI-Thớt-đâu-ra"],
    responses: ["AI-Người-ta-boing-boing-như-z"],
  },
  {
    tag: "loli",
    negative: [
      "AI-Nhắc-lại-một-lần-nữa-từ-nay-nhắc-lại-hơi-bị-nhiều-một-quý-cô-ko-phải-loli",
    ],
    responses: ["AI-Quý-cô-ngầu-lòi-siêu-cấp-vũ-trụ", "AI-Một-quý-cô-nha"],
  },
  {
    tag: "lùn",
    negative: ["AI-Cái-gì-lùn-mà-lùn"],
    responses: [
      "AI-Hơi-bị-cao",
      "AI-Ko-biết-về-chiều-cao-j-hết",
      "AI-Nghĩ-sao-người-ta-cao-mà-chê-lùn",
    ],
  },
  {
    tag: "lõm",
    negative: ["AI-Mấy-người-này-lõm-lõm-cái-gì", "AI-Lõm"],
    responses: [
      "AI-Người-ta-boing-boing-như-z",
      "AI-Người-ta-boing-boing-như-z-mà-lõm-lõm-lõm",
      "AI-Người-ta-boing-z-mà-lõm",
    ],
  },
];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// makes playing audio return a promise
function playAudio(audio, t) {
  if (t === undefined) {
    t = 0;
  }
  return new Promise((res) => {
    setTimeout(() => {
      audio.play();
      audio.onended = res;
    }, t);
  });
}

async function randAngry() {
  isOnVoice = false;
  num = getRndInteger(0, first_angry.length - 1);
  voice.src = "asset/audio/voice_ai_lan_linh/" + first_angry[num] + ".mp3";
  await playAudio(voice);

  for (const e in angry) {
    if (Object.hasOwnProperty.call(angry, e)) {
      const element = angry[e];
      if (str.includes(element.tag)) {
        num = getRndInteger(0, layHoi.length - 1);
        voice.src = "asset/audio/voice_ai_lan_linh/" + layHoi[num] + ".mp3";
        await playAudio(voice, 500);
        num = getRndInteger(0, element.negative.length - 1);
        voice.src =
          "asset/audio/voice_ai_lan_linh/" + element.negative[num] + ".mp3";
        await playAudio(voice, 500);
        num = getRndInteger(0, huh.length - 1);
        voice.src = "asset/audio/voice_ai_lan_linh/" + huh[num] + ".mp3";
        await playAudio(voice, 500);
        num = getRndInteger(0, element.responses.length - 1);
        voice.src =
          "asset/audio/voice_ai_lan_linh/" + element.responses[num] + ".mp3";
        await playAudio(voice, 500);
        isOnVoice = true;
        return;
      }
    }
  }
  isOnVoice = true;
}

const imgLanLinh = document.querySelector("#lan-linh");
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
audioCtx.resume();
let audioSource = null;
let analyser = null;

audioSource = audioCtx.resume().createMediaElementSource(voice);
analyser = audioCtx.resume().createAnalyser();
audioSource.connect(analyser);
analyser.connect(audioCtx.destination);
analyser.fftSize = 32;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

(function handleAudio() {
  setTimeout(() => {
    if (true) {
      let opacity = 0;
      analyser.getByteFrequencyData(dataArray);
      for (let i = 0; i < bufferLength; i++) {
        opacity += dataArray[i];
      }
      opacity /= bufferLength;
      opacity = opacity / 100;
      if (opacity >= 1)
        imgLanLinh.style.transform = "scale(" + opacity + "," + opacity + ")";
      else imgLanLinh.style.transform = "scale(1,1)";
    }
    handleAudio();
  }, 60);
})();
