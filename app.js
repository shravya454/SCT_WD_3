// ---- state ----
var currentTopic = "general";
var questions = [];
var currentIndex = 0;
var score = 0;
var selectedOptions = [];   // array of indexes user clicked
var answered = false;
var results = [];           // store per-question results for breakdown

// ---- grab elements ----
var startScreen   = document.getElementById("start-screen");
var quizScreen    = document.getElementById("quiz-screen");
var resultScreen  = document.getElementById("result-screen");

var topicPills    = document.querySelectorAll(".pill");
var btnStart      = document.getElementById("btn-start");
var btnNext       = document.getElementById("btn-next");
var btnRetry      = document.getElementById("btn-retry");
var btnHome       = document.getElementById("btn-home");

var qCounter      = document.getElementById("q-counter");
var qTypeBadge    = document.getElementById("q-type-badge");
var qHint         = document.getElementById("q-hint");
var questionText  = document.getElementById("question-text");
var optionsGrid   = document.getElementById("options-grid");
var progressBar   = document.getElementById("progress-bar");
var liveScore     = document.getElementById("live-score");

var resultEmoji   = document.getElementById("result-emoji");
var resultTitle   = document.getElementById("result-title");
var finalScore    = document.getElementById("final-score");
var totalScore    = document.getElementById("total-score");
var resultMsg     = document.getElementById("result-msg");
var resultBreakdown = document.getElementById("result-breakdown");

// ---- topic selection ----
topicPills.forEach(function(pill) {
  pill.addEventListener("click", function() {
    topicPills.forEach(function(p) { p.classList.remove("active"); });
    pill.classList.add("active");
    currentTopic = pill.dataset.topic;
  });
});

// ---- start button ----
btnStart.addEventListener("click", function() {
  startQuiz();
});

function startQuiz() {
  questions = shuffleArray(questionBank[currentTopic].slice());
  currentIndex = 0;
  score = 0;
  results = [];
  liveScore.textContent = "0";

  showScreen(quizScreen);
  loadQuestion();
}

// ---- load a question ----
function loadQuestion() {
  answered = false;
  selectedOptions = [];
  btnNext.disabled = true;

  var q = questions[currentIndex];

  // update header
  qCounter.textContent = "Q " + (currentIndex + 1) + " / " + questions.length;
  qTypeBadge.textContent = q.type === "multi" ? "multi select" : "single";
  qTypeBadge.className = "type-badge " + (q.type === "multi" ? "multi" : "single");
  qHint.textContent = q.type === "multi" ? "Pick all that apply" : "Pick one answer";
  questionText.textContent = q.question;

  // update progress
  var pct = (currentIndex / questions.length) * 100;
  progressBar.style.width = pct + "%";

  // render options
  optionsGrid.innerHTML = "";
  q.options.forEach(function(opt, i) {
    var btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = '<span class="opt-letter">' + getLabel(i) + '</span><span class="opt-text">' + opt + '</span>';
    btn.addEventListener("click", function() {
      handleOptionClick(i, btn, q);
    });
    optionsGrid.appendChild(btn);
  });

  // little animation trigger
  questionText.classList.remove("slide-in");
  optionsGrid.classList.remove("slide-in");
  void questionText.offsetWidth; // force reflow
  questionText.classList.add("slide-in");
  optionsGrid.classList.add("slide-in");
}

function getLabel(index) {
  return ["A", "B", "C", "D"][index] || index;
}

// ---- handle clicking an option ----
function handleOptionClick(index, btn, q) {
  if (answered) return;

  if (q.type === "single") {
    // deselect everything first
    var allBtns = optionsGrid.querySelectorAll(".option-btn");
    allBtns.forEach(function(b) { b.classList.remove("selected"); });
    selectedOptions = [index];
    btn.classList.add("selected");
    // auto submit for single
    submitAnswer(q);
  } else {
    // multi: toggle selection
    var pos = selectedOptions.indexOf(index);
    if (pos === -1) {
      selectedOptions.push(index);
      btn.classList.add("selected");
    } else {
      selectedOptions.splice(pos, 1);
      btn.classList.remove("selected");
    }
    // enable next only if at least one selected
    btnNext.disabled = selectedOptions.length === 0;
  }
}

// ---- check answer ----
function submitAnswer(q) {
  if (answered) return;
  answered = true;

  var correct = q.correct;
  var allBtns = optionsGrid.querySelectorAll(".option-btn");
  var isCorrect = checkCorrect(selectedOptions, correct);

  if (isCorrect) {
    score++;
    liveScore.textContent = score;
  }

  // store result
  results.push({
    question: q.question,
    correct: isCorrect,
    selected: selectedOptions.slice(),
    answers: correct
  });

  // show right/wrong styles
  allBtns.forEach(function(b, i) {
    if (correct.indexOf(i) !== -1) {
      b.classList.add("correct");
    } else if (selectedOptions.indexOf(i) !== -1 && correct.indexOf(i) === -1) {
      b.classList.add("wrong");
    }
    b.disabled = true;
  });

  btnNext.disabled = false;
}

// exact match for multi, same for single
function checkCorrect(selected, correct) {
  if (selected.length !== correct.length) return false;
  var sortedSelected = selected.slice().sort();
  var sortedCorrect = correct.slice().sort();
  for (var i = 0; i < sortedCorrect.length; i++) {
    if (sortedSelected[i] !== sortedCorrect[i]) return false;
  }
  return true;
}

// ---- next button ----
btnNext.addEventListener("click", function() {
  var q = questions[currentIndex];

  // if multi and not answered yet, submit first
  if (q.type === "multi" && !answered) {
    submitAnswer(q);
    return;
  }

  currentIndex++;
  if (currentIndex >= questions.length) {
    showResults();
  } else {
    loadQuestion();
  }
});

// ---- show results ----
function showResults() {
  progressBar.style.width = "100%";
  showScreen(resultScreen);

  finalScore.textContent = score;
  totalScore.textContent = questions.length;

  var pct = (score / questions.length) * 100;

  if (pct === 100) {
    resultEmoji.textContent = "🏆";
    resultTitle.textContent = "Perfect score!";
    resultMsg.textContent = "You got every single one. Incredible!";
  } else if (pct >= 80) {
    resultEmoji.textContent = "🎉";
    resultTitle.textContent = "Great job!";
    resultMsg.textContent = "You really know your stuff.";
  } else if (pct >= 60) {
    resultEmoji.textContent = "👍";
    resultTitle.textContent = "Not bad!";
    resultMsg.textContent = "A bit more studying and you'll nail it.";
  } else if (pct >= 40) {
    resultEmoji.textContent = "😅";
    resultTitle.textContent = "Keep trying!";
    resultMsg.textContent = "You got some right. Give it another shot.";
  } else {
    resultEmoji.textContent = "😬";
    resultTitle.textContent = "Rough round...";
    resultMsg.textContent = "Hey, now you know what to study!";
  }

  // build breakdown
  resultBreakdown.innerHTML = "";
  results.forEach(function(r, i) {
    var item = document.createElement("div");
    item.className = "breakdown-item " + (r.correct ? "ok" : "fail");
    item.innerHTML =
      '<span class="bd-num">Q' + (i + 1) + '</span>' +
      '<span class="bd-text">' + truncate(r.question, 48) + '</span>' +
      '<span class="bd-icon">' + (r.correct ? "✓" : "✗") + '</span>';
    resultBreakdown.appendChild(item);
  });
}

function truncate(str, maxLen) {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen) + "…";
}

// ---- retry & home ----
btnRetry.addEventListener("click", function() {
  startQuiz();
});

btnHome.addEventListener("click", function() {
  showScreen(startScreen);
});

// ---- helpers ----
function showScreen(target) {
  [startScreen, quizScreen, resultScreen].forEach(function(s) {
    s.classList.add("hidden");
  });
  target.classList.remove("hidden");
}

function shuffleArray(arr) {
  // basic Fisher-Yates
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
