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
 },
  ,
 {
  q: "Who is the current Governor of RBI (2024)?",
  A: "Shaktikanta Das",
  B: "Urjit Patel",
  C: "Raghuram Rajan",
  D: "D. Subbarao",
  ans: "A"
 },
 {
  q: "What is the current repo rate in India (2024)?",
  A: "5.50%",
  B: "6.00%",
  C: "6.50%",
  D: "7.00%",
  ans: "C"
 },
 {
  q: "Which payment system is operated by NPCI?",
  A: "RTGS",
  B: "NEFT",
  C: "UPI",
  D: "IMPS only",
  ans: "C"
 },
 {
  q: "Which body issues currency notes in India?",
  A: "Ministry of Finance",
  B: "RBI",
  C: "SEBI",
  D: "NABARD",
  ans: "B"
 },
 {
  q: "What does KYC stand for in banking?",
  A: "Know Your Credit",
  B: "Keep Your Cash",
  C: "Know Your Customer",
  D: "Key Yield Certificate",
  ans: "C"
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
