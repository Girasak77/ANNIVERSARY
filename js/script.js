"use strict";

/* ================================================================
   แก้ข้อมูลส่วนตัวของเว็บไซต์ได้ที่ CONFIG และ Array ด้านล่างนี้
   ================================================================ */
const CONFIG = {
  partnerName: "หนู",
  yourName: "พี่",
  anniversaryDate: "2026-02-17",
  welcomeImage: "imge/07-memory.jpg",
  welcomeImagePosition: "50% 45%",
  puzzleImage: "imge/01-puzzle.jpg",
  puzzleImagePosition: "50% 58%",
  youtubeVideoId: "gBw32hEPNME",
  finalGiftImage: "imge/08-letter.jpg",
  fallbackImage: "assets/images/placeholder.jpg"
};

// Path รูปความทรงจำทั้งหมด แยกไว้เพื่อเปลี่ยนรูปภายหลังได้ง่าย
const MEMORY_IMAGES = [
  "imge/02-memory.jpg",
  "imge/09-memory.jpg",
  "imge/04-memory.jpg",
  "imge/06-memory.jpg",
  "imge/07-memory.jpg",
  "imge/05-memory.jpg",
  
];

// แก้รูป วันที่ ตำแหน่งภาพ และข้อความใต้รูป Timeline ที่นี่
const memories = [
  {
    image: MEMORY_IMAGES[0],
    imagePosition: "50% 34%",
    date: "25 ก.พ. 2026",
    title: "รูปแรกที่เราถ่ายด้วยกันจากตู้ถ่ายรูป",
    description: "จากคนสองคนที่เคยเป็นเพียงคนธรรมดาในชีวิตกันและกัน วันหนึ่งพี่กลับมีหนูที่กลายมาเป็นคนที่สำคัญของชีวิตพี่มากที่สุด"
  },
  {
    image: MEMORY_IMAGES[1],
    imagePosition: "50% 42%",
    date: "18 มิ.ย. 2026",
    title: "วันที่เราได้หัวเราะและแกล้งกัน",
    description: "พี่ชอบเวลาที่เราได้หัวเราะ ได้แกล้งกัน และได้เป็นตัวเองโดยไม่ต้องพยายามทำให้ทุกอย่างสมบูรณ์แบบ"
  },
  {
    image: MEMORY_IMAGES[2],
    imagePosition: "50% 64%",
    date: "26 ม.ค. 2026",
    title: "ช่วงเวลาธรรมดาที่มีความหมาย",
    description: "บางครั้งเราไม่ได้ไปสถานที่พิเศษ ไม่ได้ทำอะไรยิ่งใหญ่ แค่ได้อยู่ข้างกัน ช่วงเวลาธรรมดานั้นก็พิเศษสำหรับพี่แล้ว"
  },
  {
    image: MEMORY_IMAGES[3],
    imagePosition: "50% 45%",
    date: "11 มี.ค. 2026",
    title: "วันที่หนูอยู่ข้างพี่",
    description: "ขอบคุณที่อยู่ด้วยกันทั้งวันที่พี่มีความสุข และวันที่พี่เหนื่อย ขอบคุณที่ทำให้พี่รู้สึกว่าตัวเองไม่ได้เดินอยู่คนเดียวอีกต่อไป"
  },
  {
    image: MEMORY_IMAGES[4],
    imagePosition: "50% 35%",
    date: "29 มี.ค. 2026",
    title: "ภาพที่พี่ไม่อยากลืม แม้ภาพจะไม่ชัด",
    description: "ไม่ว่าภาพจะชัดหรือมืดแค่ไหน สำหรับพี่มันยังคงชัดเจน เพราะในภาพนั้นมีเราสองคนอยู่ด้วยกัน"
  },
  {
    image: MEMORY_IMAGES[5],
    imagePosition: "50% 40%",
    date: "วันนี้และหลังจากนี้",
    title: "ภาพที่พี่ไม่อยากลืม และอยากเก็บไว้ตลอดไป",
    description: "พี่หวังว่านี่จะเป็นเพียงส่วนเล็ก ๆ ของความทรงจำทั้งหมด และเราจะยังมีภาพใหม่ ๆ ให้เก็บเพิ่มอีกมากมาย"
  }
];

// แก้คำถาม ตัวเลือก และคำตอบ (นับคำตอบจาก 0) ที่นี่
const quizQuestions = [
  {
    question: "วันที่เราเริ่มคบกันคือวันไหน",
    options: ["วันที่ 16 ก.พ. 2026", "วันที่ 18 ก.พ. 2026", "วันที่ 17 ก.พ. 2026"],
    correctAnswer: 2
  },
  {
    question: "สถานที่ที่เรามีความทรงจำร่วมกันมากที่สุดคือที่ไหน",
    options: ["หอพัก", "บ้าน", "ตลาด"],
    correctAnswer: 0
  },
  {
    question: "เวลาพี่เรียกหนู คำไหนที่ใช้บ่อยที่สุด",
    options: ["ไอ้ดื้อ", "ตัวเล็ก", "คุณนายน้อย"],
    correctAnswer: 2
  }
];

// แก้เหตุผลที่พี่รักหนูทั้ง 8 ข้อที่นี่
const loveReasons = [
  "เพราะหนูทำให้วันธรรมดาของพี่มีเรื่องให้ยิ้มได้เสมอ",
  "เพราะพี่สามารถเป็นตัวเองได้ เวลาที่อยู่กับหนู",
  "เพราะถึงเราจะมีวันที่ไม่เข้าใจกัน แต่หนูก็ยังเป็นคนที่พี่อยากกลับมาคุยด้วยเสมอ",
  "เพราะรอยยิ้มของหนูเป็นหนึ่งในสิ่งที่พี่อยากเห็นไปนาน ๆ",
  "เพราะหนูทำให้พี่รู้ว่าความสุขไม่จำเป็นต้องเป็นเรื่องใหญ่",
  "เพราะทุกครั้งที่มีหนูอยู่ข้าง ๆ พี่รู้สึกว่าตัวเองไม่ได้เดินอยู่คนเดียว",
  "เพราะทั้งข้อดีและความดื้อของหนู คือสิ่งที่ทำให้พี่รักหนู",
  "และเหตุผลที่สำคัญที่สุด เพราะคนคนนั้นคือหนู คนที่พี่รักที่สุดในโลก"
];

// แก้ข้อความจดหมายที่นี่
const letterMessage = `ถึงหนู คนพิเศษของพี่

สุขสันต์วันครบรอบของเรานะ

พี่ไม่รู้ว่าเว็บไซต์เล็ก ๆ นี้จะทำให้หนูยิ้มได้มากแค่ไหน
แต่ทุกส่วนในนี้ พี่ตั้งใจทำขึ้นมาเพราะอยากให้หนูรู้ว่า
ช่วงเวลาที่เรามีด้วยกันมีความหมายกับพี่มากจริง ๆ

ตั้งแต่วันที่หนูเข้ามา ชีวิตของพี่ก็มีเรื่องราวเพิ่มขึ้นมากมาย
มีทั้งวันที่เราหัวเราะด้วยกัน
วันที่เราแกล้งกัน
วันที่เราคิดถึงกัน
รวมถึงวันที่เราอาจไม่เข้าใจกันบ้าง

พี่ยอมรับว่าพี่อาจไม่ใช่คนที่ดีที่สุด
บางครั้งพี่อาจทำให้หนูเสียใจ
อาจพูดไม่เก่ง
อาจแสดงความรู้สึกออกมาได้ไม่ดีเท่าที่ควร
แต่สิ่งหนึ่งที่พี่อยากให้หนูรู้ไว้เสมอคือ
ทุกความรู้สึกที่พี่มีให้หนู มันเป็นเรื่องจริง

ขอบคุณที่เข้ามาเป็นความสุข
ขอบคุณที่อยู่ข้างกันในวันที่พี่เหนื่อย
ขอบคุณทุกข้อความ ทุกสาย ทุกกอด
และทุกช่วงเวลาที่หนูมอบให้พี่

ความรักของเราอาจไม่ได้สมบูรณ์แบบทุกวัน
แต่พี่ไม่ต้องการความสัมพันธ์ที่สมบูรณ์แบบ
พี่เพียงอยากมีความสัมพันธ์ที่เรายังคอยจับมือกัน
เรียนรู้กัน ให้อภัยกัน และเติบโตไปด้วยกัน

ในอนาคตเราอาจต้องเจอกับเรื่องอีกมากมาย
อาจมีทั้งวันที่ง่ายและวันที่เหนื่อย
แต่พี่หวังว่าไม่ว่าจะเกิดอะไรขึ้น
เราจะยังเลือกกลับมาหากันเสมอ

ขอบคุณที่ทำให้คำว่า ‘เรา’ มีความหมาย
ขอบคุณที่เป็นหนู
และขอบคุณที่ยังอยู่ในชีวิตของพี่

พี่อาจไม่รู้ว่าอนาคตจะพาเราไปไกลแค่ไหน
แต่ในวันนี้ พี่รู้เพียงว่า
พี่ยังอยากมีหนูอยู่ในทุกวันต่อจากนี้

พี่รักหนูนะ
และหวังว่าเราจะมีวันครบรอบด้วยกันอีกหลาย ๆ ครั้ง ❤️`;

const state = {
  puzzleOrder: [],
  puzzleMoves: 0,
  puzzleStartedAt: null,
  puzzleTimerId: null,
  puzzleComplete: false,
  selectedTile: null,
  pointerStart: null,
  quizIndex: 0,
  typingIndex: 0,
  typingTimer: null,
  typingPaused: false,
  giftClicks: 0,
  lastModalTrigger: null
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.addEventListener("DOMContentLoaded", initializePage);

function initializePage() {
  applyConfig();
  createFloatingHearts();
  updateAnniversaryCounter();
  renderTimeline();
  renderReasonCards();
  initializePuzzle();
  initializeQuiz();
  initializeAudio();
  bindPageEvents();
  observeReveals();
}

function applyConfig() {
  const welcomeImage = $("#welcomeImage");
  const preview = $("#previewImage");
  const giftImage = $("#giftImage");
  const footerPartner = $("#footerPartner");
  if (welcomeImage) {
    welcomeImage.src = CONFIG.welcomeImage;
    welcomeImage.style.objectPosition = CONFIG.welcomeImagePosition;
    addImageFallback(welcomeImage);
  }
  if (preview) preview.src = CONFIG.puzzleImage;
  if (giftImage) {
    giftImage.src = CONFIG.finalGiftImage;
    addImageFallback(giftImage);
  }
  if (footerPartner) footerPartner.textContent = CONFIG.partnerName;
}

function bindPageEvents() {
  $("#startButton")?.addEventListener("click", startStory);
  $("#resetPuzzle")?.addEventListener("click", initializePuzzle);
  $("#previewButton")?.addEventListener("click", () => openImageModal(CONFIG.puzzleImage, "รูปต้นฉบับสำหรับเกมจิ๊กซอว์", "รูปต้นฉบับ"));
  $("#closeModal")?.addEventListener("click", closePreviewModal);
  $("[data-close-modal]")?.addEventListener("click", closePreviewModal);
  $("#continueButton")?.addEventListener("click", unlockMemories);
  $("#musicToggle")?.addEventListener("click", toggleMusic);
  $("#envelope")?.addEventListener("click", openLetter);
  $("#replayLetter")?.addEventListener("click", replayLetter);
  $("#showFullLetter")?.addEventListener("click", showFullLetter);
  $("#giftBox")?.addEventListener("click", tapGift);
  $("#giftImageButton")?.addEventListener("click", () => openImageModal(CONFIG.finalGiftImage, "ภาพจดหมายความทรงจำที่พี่เก็บไว้", "ความทรงจำชิ้นสุดท้าย"));
  $("#restartStory")?.addEventListener("click", () => $("#anniversary")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" }));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !$("#previewModal")?.hidden) closePreviewModal();
  });
}

function startStory() {
  playMusic();
  createBurst(window.innerWidth / 2, window.innerHeight * 0.58, 14);
  const welcome = $("#welcome");
  welcome?.classList.add("is-leaving");
  window.setTimeout(() => {
    if (welcome) welcome.hidden = true;
    $("#anniversary")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  }, reducedMotion ? 10 : 650);
}

function updateAnniversaryCounter() {
  const start = new Date(`${CONFIG.anniversaryDate}T00:00:00`);
  const now = new Date();
  if (Number.isNaN(start.getTime())) return;

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const totalDays = Math.max(0, Math.floor((today - start) / 86400000));
  const parts = getCalendarDifference(start, today);
  setText("#yearsCount", parts.years);
  setText("#monthsCount", parts.months);
  setText("#daysCount", parts.days);
  const totalText = $("#totalDaysText");
  if (totalText) totalText.innerHTML = `เราเดินทางมาด้วยกันแล้ว <strong>${totalDays.toLocaleString("th-TH")}</strong> วัน`;
}

function getCalendarDifference(start, end) {
  if (end < start) return { years: 0, months: 0, days: 0 };
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  if (days < 0) {
    months--;
    days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years: Math.max(0, years), months, days };
}

/* ------------------------------- Puzzle ------------------------------- */
function initializePuzzle() {
  window.clearInterval(state.puzzleTimerId);
  state.puzzleOrder = shuffle([...Array(9).keys()]);
  if (state.puzzleOrder.every((value, index) => value === index)) {
    [state.puzzleOrder[0], state.puzzleOrder[1]] = [state.puzzleOrder[1], state.puzzleOrder[0]];
  }
  state.puzzleMoves = 0;
  state.puzzleStartedAt = null;
  state.puzzleComplete = false;
  state.selectedTile = null;
  setText("#moveCount", "0");
  setText("#timer", "00:00");
  const success = $("#puzzleSuccess");
  if (success) success.hidden = true;
  renderPuzzle();
}

function renderPuzzle() {
  const board = $("#puzzleBoard");
  if (!board) return;
  board.className = `puzzle-board${state.puzzleComplete ? " is-complete" : ""}`;
  board.replaceChildren();
  state.puzzleOrder.forEach((pieceNumber, slotIndex) => {
    const tile = document.createElement("button");
    const row = Math.floor(pieceNumber / 3);
    const col = pieceNumber % 3;
    tile.type = "button";
    tile.className = "puzzle-tile";
    tile.dataset.slot = String(slotIndex);
    tile.setAttribute("aria-label", `ชิ้นส่วนภาพหมายเลข ${pieceNumber + 1} อยู่ตำแหน่ง ${slotIndex + 1}`);
    tile.disabled = state.puzzleComplete;
    const image = document.createElement("img");
    image.className = "puzzle-source-image";
    image.src = CONFIG.puzzleImage;
    image.alt = "";
    image.draggable = false;
    image.style.left = `${col * -100}%`;
    image.style.top = `${row * -100}%`;
    image.style.objectPosition = CONFIG.puzzleImagePosition;
    addImageFallback(image);
    tile.append(image);
    if (pieceNumber === slotIndex) tile.classList.add("is-correct");
    if (state.selectedTile === slotIndex) tile.classList.add("is-selected");
    bindPuzzleTile(tile);
    board.append(tile);
  });
}

function bindPuzzleTile(tile) {
  tile.addEventListener("pointerdown", (event) => {
    if (state.puzzleComplete) return;
    event.preventDefault();
    state.pointerStart = { slot: Number(tile.dataset.slot), x: event.clientX, y: event.clientY };
    tile.classList.add("is-dragging");
    tile.setPointerCapture?.(event.pointerId);
  });

  tile.addEventListener("pointerup", (event) => {
    if (!state.pointerStart || state.puzzleComplete) return;
    const source = state.pointerStart.slot;
    const targetElement = document.elementFromPoint(event.clientX, event.clientY)?.closest(".puzzle-tile");
    const target = targetElement ? Number(targetElement.dataset.slot) : source;
    const distance = Math.hypot(event.clientX - state.pointerStart.x, event.clientY - state.pointerStart.y);
    state.pointerStart = null;
    tile.classList.remove("is-dragging");
    if (target !== source && Number.isInteger(target)) {
      swapPuzzlePieces(source, target);
    } else if (distance < 12) {
      selectPuzzleTile(source);
    }
  });

  tile.addEventListener("pointercancel", () => {
    state.pointerStart = null;
    tile.classList.remove("is-dragging");
  });

  tile.addEventListener("click", (event) => {
    if (event.detail === 0) selectPuzzleTile(Number(tile.dataset.slot));
  });
}

function selectPuzzleTile(slot) {
  if (state.selectedTile === null) {
    state.selectedTile = slot;
    renderPuzzle();
    setText("#puzzleFeedback", `เลือกชิ้นส่วนตำแหน่ง ${slot + 1} แล้ว`);
    return;
  }
  if (state.selectedTile === slot) {
    state.selectedTile = null;
    renderPuzzle();
    return;
  }
  swapPuzzlePieces(state.selectedTile, slot);
}

function swapPuzzlePieces(first, second) {
  startPuzzleTimer();
  [state.puzzleOrder[first], state.puzzleOrder[second]] = [state.puzzleOrder[second], state.puzzleOrder[first]];
  state.puzzleMoves++;
  state.selectedTile = null;
  setText("#moveCount", state.puzzleMoves);
  state.puzzleComplete = state.puzzleOrder.every((value, index) => value === index);
  renderPuzzle();
  if (state.puzzleOrder[first] === first || state.puzzleOrder[second] === second) {
    setText("#puzzleFeedback", "วางถูกตำแหน่งแล้ว");
  }
  if (state.puzzleComplete) completePuzzle();
}

function startPuzzleTimer() {
  if (state.puzzleStartedAt) return;
  state.puzzleStartedAt = Date.now();
  state.puzzleTimerId = window.setInterval(() => {
    const seconds = Math.floor((Date.now() - state.puzzleStartedAt) / 1000);
    setText("#timer", formatTime(seconds));
  }, 1000);
}

function completePuzzle() {
  window.clearInterval(state.puzzleTimerId);
  const success = $("#puzzleSuccess");
  if (success) success.hidden = false;
  createConfetti(55);
  createBurst(window.innerWidth / 2, window.innerHeight / 2, 20);
  setText("#puzzleFeedback", "ต่อภาพสำเร็จแล้ว");
  window.setTimeout(() => success?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" }), 250);
}

function unlockMemories() {
  const story = $("#unlockedStory");
  if (!story) return;
  story.hidden = false;
  observeReveals();
  window.setTimeout(() => $("#memories")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" }), 40);
}

/* -------------------------- Timeline and quiz -------------------------- */
function renderTimeline() {
  const timeline = $("#timeline");
  if (!timeline) return;
  timeline.replaceChildren();
  memories.forEach((memory) => {
    const article = document.createElement("article");
    article.className = "memory reveal";
    article.innerHTML = `
      <span class="memory-dot" aria-hidden="true"></span>
      <button class="memory-image" type="button" aria-label="เปิดดูรูป ${memory.title} แบบเต็ม">
        <img src="${memory.image}" alt="รูปความทรงจำ: ${memory.title}" loading="lazy" style="object-position:${memory.imagePosition}">
        <span class="image-view-hint" aria-hidden="true">ดูรูปเต็ม ↗</span>
      </button>
      <div class="memory-copy">
        <p class="memory-date">${memory.date}</p>
        <h3>${memory.title}</h3>
        <p>${memory.description}</p>
      </div>`;
    const image = $("img", article);
    if (image) addImageFallback(image);
    $(".memory-image", article)?.addEventListener("click", () => openImageModal(memory.image, `รูปความทรงจำ: ${memory.title}`, memory.title));
    timeline.append(article);
  });
}

function initializeQuiz() {
  state.quizIndex = 0;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const content = $("#quizContent");
  const question = quizQuestions[state.quizIndex];
  if (!content || !question) return;
  setText("#quizProgressLabel", `คำถาม ${state.quizIndex + 1} จาก ${quizQuestions.length}`);
  setText("#quizPercent", `${Math.round((state.quizIndex / quizQuestions.length) * 100)}%`);
  const bar = $("#quizProgressBar");
  if (bar) bar.style.width = `${(state.quizIndex / quizQuestions.length) * 100}%`;
  content.replaceChildren();
  const title = document.createElement("h3");
  title.className = "quiz-question";
  title.textContent = question.question;
  const options = document.createElement("div");
  options.className = "quiz-options";
  question.options.forEach((label, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = label;
    button.addEventListener("click", () => answerQuiz(index, button));
    options.append(button);
  });
  content.append(title, options);
  setText("#quizFeedback", "เลือกคำตอบที่คิดว่าใช่ที่สุด");
}

function answerQuiz(answerIndex, button) {
  const question = quizQuestions[state.quizIndex];
  if (!question || button.disabled) return;
  if (answerIndex !== question.correctAnswer) {
    button.classList.remove("wrong");
    void button.offsetWidth;
    button.classList.add("wrong");
    setText("#quizFeedback", "เกือบถูกแล้ว ลองใหม่อีกครั้งนะหนู");
    return;
  }
  $$(".quiz-option").forEach((option) => { option.disabled = true; });
  button.classList.add("correct");
  setText("#quizFeedback", "เก่งที่สุดเลยเด็กดื้อของพี่ ❤️");
  const rect = button.getBoundingClientRect();
  createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 9);
  state.quizIndex++;
  const percent = Math.round((state.quizIndex / quizQuestions.length) * 100);
  setText("#quizPercent", `${percent}%`);
  const bar = $("#quizProgressBar");
  if (bar) bar.style.width = `${percent}%`;
  window.setTimeout(() => {
    if (state.quizIndex < quizQuestions.length) renderQuizQuestion();
    else completeQuiz();
  }, reducedMotion ? 50 : 900);
}

function completeQuiz() {
  const content = $("#quizContent");
  if (content) content.innerHTML = `<div class="center"><span class="success-icon" aria-hidden="true">♥</span><h3>ตอบครบทุกข้อแล้ว!</h3><p>ต่อให้หนูอาจจำบางเรื่องไม่ได้<br>แต่พี่หวังว่าหนูจะจำได้เสมอว่าพี่รักหนูมากแค่ไหน</p></div>`;
  setText("#quizProgressLabel", "ครบทุกคำถาม");
  setText("#quizFeedback", "ปลดล็อกความลับถัดไปแล้ว");
  const afterQuiz = $("#afterQuiz");
  if (afterQuiz) afterQuiz.hidden = false;
  createConfetti(35);
  observeReveals();
  window.setTimeout(() => $("#reasons")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" }), 550);
}

/* -------------------------- Cards and letter --------------------------- */
function renderReasonCards() {
  const grid = $("#reasonCards");
  if (!grid) return;
  grid.replaceChildren();
  loveReasons.forEach((reason, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "reason-card reveal";
    card.setAttribute("aria-label", `เปิดอ่านเหตุผลข้อที่ ${index + 1}`);
    card.setAttribute("aria-pressed", "false");
    card.innerHTML = `<span class="reason-inner"><span class="reason-face reason-front"><span class="reason-number">0${index + 1}</span><span class="reason-heart" aria-hidden="true">♥</span><small>แตะเพื่อเปิด</small></span><span class="reason-face reason-back">${reason}</span></span>`;
    card.addEventListener("click", () => {
      const flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(flipped));
      if (flipped) {
        const rect = card.getBoundingClientRect();
        createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 5);
        if (index === loveReasons.length - 1) {
          const finalMessage = $("#reasonFinalMessage");
          if (finalMessage) finalMessage.hidden = false;
          createBurst(window.innerWidth / 2, window.innerHeight / 2, 16);
        }
      }
    });
    grid.append(card);
  });
}

function openLetter() {
  const envelope = $("#envelope");
  if (!envelope || envelope.classList.contains("is-open")) return;
  envelope.classList.add("is-open");
  envelope.setAttribute("aria-expanded", "true");
  envelope.setAttribute("aria-label", "จดหมายถูกเปิดแล้ว");
  const controls = $("#letterControls");
  if (controls) controls.hidden = false;
  setText("#letterHint", "เขียนจากทุกความรู้สึกที่พี่มีให้หนู");
  window.setTimeout(startTypingLetter, reducedMotion ? 10 : 900);
}

function startTypingLetter() {
  window.clearInterval(state.typingTimer);
  state.typingPaused = false;
  const target = $("#typedLetter");
  if (!target) return;
  if (reducedMotion) {
    target.textContent = letterMessage;
    state.typingIndex = letterMessage.length;
    return;
  }
  state.typingTimer = window.setInterval(() => {
    if (state.typingPaused) return;
    target.textContent = letterMessage.slice(0, ++state.typingIndex);
    if (state.typingIndex >= letterMessage.length) window.clearInterval(state.typingTimer);
  }, 28);
}

function replayLetter() {
  state.typingIndex = 0;
  state.typingPaused = false;
  setText("#typedLetter", "");
  startTypingLetter();
}

function showFullLetter() {
  window.clearInterval(state.typingTimer);
  state.typingPaused = false;
  state.typingIndex = letterMessage.length;
  setText("#typedLetter", letterMessage);
}

/* ------------------------------ Gift ---------------------------------- */
function tapGift() {
  if (state.giftClicks >= 5) return;
  state.giftClicks++;
  const gift = $("#giftBox");
  gift?.classList.remove("shake");
  void gift?.offsetWidth;
  gift?.classList.add("shake");
  const rect = gift?.getBoundingClientRect();
  if (rect) createBurst(rect.left + rect.width / 2, rect.top + 50, 7);
  const messages = [
    "ยังไม่เปิดง่าย ๆ หรอก 😊",
    "อีกนิดเดียวหนู",
    "ของข้างในสำคัญมากนะ",
    "พร้อมหรือยังคนพิเศษ",
    "เปิดได้แล้ว ❤️"
  ];
  const remaining = 5 - state.giftClicks;
  setText("#giftCounter", messages[state.giftClicks - 1]);
  if (remaining === 0) window.setTimeout(revealGift, reducedMotion ? 20 : 450);
}

function revealGift() {
  const gift = $("#giftBox");
  const reveal = $("#giftReveal");
  gift?.classList.add("is-open");
  if (gift) gift.disabled = true;
  if (reveal) reveal.hidden = false;
  createConfetti(70);
  window.setTimeout(() => reveal?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" }), 350);
}

/* -------------------------- YouTube Audio ----------------------------- */
let youtubePlayer = null;
let youtubePlayerReady = false;
let pendingMusicPlay = false;

function initializeAudio() {
  if (!$("#youtubeAudioPlayer")) return;
  const apiScript = document.createElement("script");
  apiScript.src = "https://www.youtube.com/iframe_api";
  apiScript.async = true;
  apiScript.addEventListener("error", () => setText("#musicStatus", "โหลดเพลงไม่ได้"));
  document.head.append(apiScript);
}

window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
  youtubePlayer = new YT.Player("youtubeAudioPlayer", {
    videoId: CONFIG.youtubeVideoId,
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      loop: 1,
      playlist: CONFIG.youtubeVideoId,
      playsinline: 1
    },
    events: {
      onReady(event) {
        youtubePlayerReady = true;
        event.target.setVolume(30);
        if (pendingMusicPlay) event.target.playVideo();
      },
      onStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING) updateMusicButton(true);
        if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) updateMusicButton(false);
      },
      onAutoplayBlocked() {
        pendingMusicPlay = false;
        updateMusicButton(false);
      },
      onError() {
        pendingMusicPlay = false;
        updateMusicButton(false);
        setText("#musicStatus", "เปิดเพลงไม่ได้");
      }
    }
  });
};

function playMusic() {
  pendingMusicPlay = true;
  if (youtubePlayerReady) youtubePlayer.playVideo();
  else setText("#musicStatus", "กำลังโหลดเพลง…");
}

function toggleMusic() {
  if (!youtubePlayerReady) {
    playMusic();
    return;
  }
  const isPlaying = youtubePlayer.getPlayerState() === YT.PlayerState.PLAYING;
  if (isPlaying) {
    pendingMusicPlay = false;
    youtubePlayer.pauseVideo();
  } else {
    playMusic();
  }
}

function updateMusicButton(isPlaying) {
  const button = $("#musicToggle");
  if (!button) return;
  button.classList.toggle("is-playing", isPlaying);
  button.setAttribute("aria-pressed", String(isPlaying));
  setText("#musicStatus", isPlaying ? "กำลังเล่น" : "เปิดเพลง");
}

/* ----------------------- Modal, effects, helpers ---------------------- */
function openImageModal(source, altText, title) {
  const modal = $("#previewModal");
  if (!modal) return;
  const image = $("#previewImage");
  if (image) {
    image.src = source;
    image.alt = altText;
    image.dataset.fallbackApplied = "false";
    addImageFallback(image);
  }
  setText("#modalTitle", title);
  state.lastModalTrigger = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  $("#closeModal")?.focus();
}

function addImageFallback(image) {
  image.addEventListener("error", () => {
    if (image.dataset.fallbackApplied === "true") return;
    image.dataset.fallbackApplied = "true";
    image.src = CONFIG.fallbackImage;
    image.alt = `${image.alt || "รูปความทรงจำ"} (ใช้ภาพสำรอง เนื่องจากไม่พบไฟล์จริง)`;
  }, { once: true });
}

function closePreviewModal() {
  const modal = $("#previewModal");
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  state.lastModalTrigger?.focus?.();
}

function createFloatingHearts() {
  const layer = $(".floating-hearts");
  if (!layer || reducedMotion) return;
  for (let index = 0; index < 12; index++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = index % 3 === 0 ? "♡" : "♥";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${10 + Math.random() * 16}px`;
    heart.style.animationDuration = `${13 + Math.random() * 14}s`;
    heart.style.animationDelay = `${Math.random() * -18}s`;
    layer.append(heart);
  }
}

function createBurst(x, y, amount = 10) {
  if (reducedMotion) return;
  const layer = $("#effectsLayer");
  if (!layer) return;
  for (let index = 0; index < amount; index++) {
    const particle = document.createElement("span");
    const angle = (Math.PI * 2 * index) / amount;
    const distance = 45 + Math.random() * 75;
    particle.className = "burst";
    particle.textContent = index % 2 ? "♥" : "✦";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.color = index % 2 ? "#b6536c" : "#e5ad68";
    particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    particle.addEventListener("animationend", () => particle.remove());
    layer.append(particle);
  }
}

function createConfetti(amount = 45) {
  if (reducedMotion) return;
  const layer = $("#effectsLayer");
  if (!layer) return;
  const colors = ["#9c4056", "#d78b9a", "#b8a5cf", "#e8b66f", "#f4d8dd"];
  for (let index = 0; index < amount; index++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * .8}s`;
    piece.style.animationDuration = `${1.8 + Math.random() * 1.7}s`;
    piece.style.setProperty("--x", `${-80 + Math.random() * 160}px`);
    piece.addEventListener("animationend", () => piece.remove());
    layer.append(piece);
  }
}

function observeReveals() {
  const elements = $$(".reveal:not(.is-observed)");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible", "is-observed"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  elements.forEach((element) => {
    element.classList.add("is-observed");
    observer.observe(element);
  });
}

function shuffle(values) {
  for (let index = values.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [values[index], values[swapIndex]] = [values[swapIndex], values[index]];
  }
  return values;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  return `${minutes}:${(seconds % 60).toString().padStart(2, "0")}`;
}

function setText(selector, value) {
  const element = $(selector);
  if (element) element.textContent = String(value);
}
