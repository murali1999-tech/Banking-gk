const questions = [
 {
  q: "Who regulates banks in India?",
  A: "NABARD",
  B: "RBI",
  C: "SEBI",
  D: "Finance Ministry",
  ans: "B"
 },
 {
  q: "Full form of CRR?",
  A: "Cash Reserve Ratio",
  B: "Credit Reserve Ratio",
  C: "Central Reserve Ratio",
  D: "Current Reserve Rate",
  ans: "A"
 }
];

let i = 0, score = 0;

function loadQuestion() {
 document.getElementById("question").innerText = questions[i].q;
 document.getElementById("A").innerText = "A. " + questions[i].A;
 document.getElementById("B").innerText = "B. " + questions[i].B;
 document.getElementById("C").innerText = "C. " + questions[i].C;
 document.getElementById("D").innerText = "D. " + questions[i].D;
 document.getElementById("result").innerText = "";
}

function checkAnswer(option) {
 if(option === questions[i].ans) {
  score++;
  document.getElementById("result").innerText = "Correct ✅";
 } else {
  document.getElementById("result").innerText = "Wrong ❌";
 }
}

function nextQuestion() {
 i++;
 if(i < questions.length) {
  loadQuestion();
 } else {
  document.getElementById("quiz").innerHTML =
   "Your Score: " + score + "/" + questions.length;
 }
}

loadQuestion();
