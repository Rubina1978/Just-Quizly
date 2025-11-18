


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

// function to prepare quiz based on selected difficulty and topics corrected with help of chatgpt
function prepareQuiz() {
    // these are scoped inside the function
    let selectedDifficulty = "";
    let selectedTopic = "";

    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const startBtn = document.getElementById('start-btn');

    // difficulty buttons
    const difficultyButtons = document.querySelectorAll('.dificulty');
    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedDifficulty = btn.dataset.dificulty;
            console.log('Selected difficulty:', selectedDifficulty);
        });
    });

    // topic buttons
    const topicButtons = document.querySelectorAll('.topic-btn');
    topicButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedTopic = btn.dataset.category;
            console.log('Selected topic:', selectedTopic);
        });
    });

    // start button
    startBtn.addEventListener('click', () => {
        if (!selectedDifficulty || !selectedTopic) {
            alert("Please select difficulty and topic before starting the quiz!");
            return;
        }

        startScreen.classList.remove('active');
        quizScreen.classList.add('active');
        console.log("Quiz started with:", selectedDifficulty, selectedTopic);
    });
}

prepareQuiz();
