/* screens */
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
/* buttons and selects */
const dificultySelect = document.querySelector('.difficulty'); /*recommended by chatgpt*/
const topicsSelect = document.querySelector('.topic-btn'); /*best practice by chatgpt*/
const startBtn = document.getElementById('start-btn');
const QuizQuestions = document.getElementById('quiz-questions');
const currentQuestion = document.getElementById('current-question');
const answerButtons = document.querySelector('.answer-btn');
const nextbtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const score = document.getElementById('final-score');
const scoreMax = document.getElementById('max-score');
const message = document.getElementById('message');

let questions = [];
let scorePoints = 0;
let progressBarWidth = 0;
let currentQuestionIndex = 0;
