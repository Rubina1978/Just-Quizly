

/* screens */
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
/* buttons and selects */
const dificultySelect = document.querySelectorAll('.dificulty'); /*recommended by chatgpt*/
const topicsSelect = document.querySelectorAll('.topic-btn'); /*best practice by chatgpt*/
const startQuiz = document.getElementById('start-btn');
const QuizQuestions = document.getElementById('quiz-questions');
const currentQuestion = document.getElementById('current-question');
const answerButtons = document.querySelectorAll('.answer-btn');
const nextbtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const score = document.getElementById('final-score');
const scoreMax = document.getElementById('max-score');
const message = document.getElementById('message');

let questions = [];
let scorePoints = 0;
let progressBarWidth = 0;
let currentQuestionIndex = 0;

// function to prepare quiz based on selected difficulty and topics corrected with helo of chatgpt
function prepareQuiz() {
    let selectedDifficulty = "";
    let selectedTopic = "";

    const dificultyButtons = document.querySelectorAll('.dificulty');
    const topicButtons = document.querySelectorAll('.topic-btn');

    dificultyButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedDificulty = btn.dataset.dificulty;
            console.log('Selected dificulty:', selectedDificulty);
        });
    });

    const topicNames = {
    22: "Geography",
    12: "Music",
    9: "General Knowledge"
};
    topicButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedTopic = btn.dataset.category;
            console.log("Selected-topic:", selectedTopic);
        });
    });
}
prepareQuiz();  // <<--- YOU MUST CALL IT

     function start() {
        
        const startBtn = document.getElementById('start-btn');
        const selectedTopic = document.querySelector('.topic-btn');
        const selectedDificulty = document.querySelector('.dificulty');
        startBtn.addEventListener('click', () => {
        if (!selectedDificulty || !selectedTopic) {
            alert(`please  ${"select dificulty"} and ${"select topic"} to start the quiz`);
            return;
        }
        startScreen.classList.remove('active');
        quizScreen.classList.add('active');
    });
}

start();
    
