const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextButton = document.getElementById("next");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(option));
        optionsEl.appendChild(button);
    });
    progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextButton.style.display = "none";
    progressEl.style.display = "none";
    resultEl.textContent = `Your score: ${score} out of ${quizData.length}`;
}

document.addEventListener("DOMContentLoaded", loadQuestion);
