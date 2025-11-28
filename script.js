/* screens */
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');

/* difficulty */
const difficultyButtons = document.querySelectorAll('.difficulty');

/* topic */
const topicButtons = document.querySelectorAll('.topic-btn');

/* quiz features */
const startBtn = document.getElementById('start-btn');
const currentQuestionEl = document.getElementById('current-question-text');
const currentQuestionNumber = document.getElementById('current-question-number');
const answersContainer = document.getElementById("answers-container");
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');

const restartQuizButton = document.getElementById("restart-btn");
const progressBar = document.getElementById('progress');

/* score and message features */
const scoreSpan = document.getElementById('score');
const message = document.getElementById('message');

/* sounds */
const correctAnswerSound = new Audio('assets/audio/correct.mp3');
const wrongAnswerSound = new Audio('assets/audio/wronganswer.mp3');
const selectionSound = new Audio('assets/audio/selectionsound.mp3');
const endQuizSound = new Audio('assets/audio/endquiz.mp3');

/* other variables */
let scorePoints = 0;
let currentQuestionIndex = 0;

// function to prepare quiz based on selected difficulty and topics corrected with help of chatgpt
let questions = [];
let selectedDifficulty = "";
let selectedTopic = "";
let stopConfetti = false;

let modal = new bootstrap.Modal(document.getElementById('my-modal'));
function showModal() {
    modal.show();
}

//  muted/unmuted operators */
const muteBtn = document.getElementById("mute-btn");
const muteIcon = document.getElementById("mute-icon");
let soundMuted = true;
muteBtn.addEventListener('click', () => {
    soundMuted = !soundMuted;
    muteIcon.src = soundMuted ? "assets/images/mute.png" : "assets/images/unmute.png";
});


/* preparation for the quiz; difficulty + topic */
function prepareQuiz() {

    // difficulty buttons
    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedDifficulty = btn.dataset.difficulty;
            /* adding disabled classes to rest of the options when option selected */
            difficultyButtons.forEach(b => {
                if (b === btn) {
                    b.classList.add("selected");
                    b.disabled = false;
                    if (!soundMuted) selectionSound.play();

                } 
            });
        });
    });

    // topic buttons
    topicButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedTopic = btn.dataset.category;
            /* adding disabled classes to rest of the options when option selected */
            topicButtons.forEach(b => {
                if (b === btn) {
                    b.classList.add("selected");
                    b.disabled = false;
                    if (!soundMuted) selectionSound.play();

                } 
            });
        });
    });

    // start button
    startBtn.addEventListener('click', async () => {
        if (!selectedDifficulty || !selectedTopic) {
            alert("Please select difficulty and topic before starting the quiz!");
            return;
        }

        startScreen.classList.remove('active');
        quizScreen.classList.add('active');

        /* updated to make fetch questions work */
        questions = await fetchQuestions(selectedDifficulty, selectedTopic);
        displayQuestions();
    });
}

prepareQuiz();


/* get questions via API, code corrected with chatgpt */
async function fetchQuestions(difficulty, topic) {
    const apiUrl = `https://opentdb.com/api.php?amount=10&category=${topic}&difficulty=${difficulty}&type=multiple`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('error fetching questions');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        return [];
    }
}


/* display and decode question had to build with chatgpt */
function displayQuestions() {

    currentQuestionNumber.textContent = currentQuestionIndex + 1;

    /* added progress marking */
    const progressMark = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = progressMark + "%";


    /* clear questions answers before next question */
    const question = questions[currentQuestionIndex];
    answersContainer.innerHTML = ""; // clear previous answers

    currentQuestionEl.textContent = decodeHTML(question.question);

    const decodedCorrect = decodeHTML(question.correct_answer);

    let answers = [...question.incorrect_answers, question.correct_answer];

    /* shuffle answers */
    answers = shuffle(answers);

    answers.forEach(answerText => {
        const btn = document.createElement("button");
        btn.className = "custom-btn-answer";
        const decodedAnswerText = decodeHTML(answerText);
        btn.textContent = decodedAnswerText;

        // store answer info for your selectAnswer function
        btn.dataset.answer = decodedAnswerText;
        btn.dataset.correctAnswer = decodedCorrect;

        btn.addEventListener("click", (e) => selectAnswer(e.currentTarget));
        answersContainer.appendChild(btn);
    });
}


/* shuffle answers part two */
function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}


/* decoding questions to html text, code help from mentor */
function decodeHTML(str) {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}


/* handling answers from questions and showing correct and incorrect,
 * code helped by mentor then adjusted to fix an error not displaying answer buttons
*/
function selectAnswer(clickedBtn) {
    const buttons = answersContainer.querySelectorAll("button");
    const correctAnswer = clickedBtn.dataset.correctAnswer;
    const selectedAnswer = clickedBtn.dataset.answer;

    // disable all buttons
    buttons.forEach(btn => btn.classList.add("disabled"));

    // highlight the correct answer
    // buttons.forEach(btn => {
    if (selectedAnswer === correctAnswer) {
        clickedBtn.classList.add("correct");
        if (!soundMuted) correctAnswerSound.play();
        scorePoints++;
        scoreSpan.textContent = scorePoints;

    } else {
        // User clicked wrong answer
        clickedBtn.classList.add("incorrect");
        if (!soundMuted) wrongAnswerSound.play(); // Play sound ONLY if wrong button clicked

        // Highlight the correct answer, but do NOT play any sound
        buttons.forEach(btn => {
            if (btn.dataset.answer === correctAnswer) {
                btn.classList.add("correct");
            }
        });
    }
    /* timer check every second */
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestions();
        } else {
            showResults();

        }

    }, 3000); /* milliseconds */
}


/* results, messages shown on end screen */
function showResults() {
    resetQuestions();
    quizScreen.classList.remove('active');
    endScreen.classList.add('active');

    if (!soundMuted) endQuizSound.play();
    finalScoreSpan.textContent = scorePoints;
    maxScoreSpan.textContent = questions.length;
    const percentage = (scorePoints / questions.length) * 100;
    if (percentage === 100) {
        message.textContent = "Congratulation you smashed it!";
    } else if (percentage >= 80) {
        message.textContent = "Congratulation almost perfect!";
    } else if (percentage >= 60) {
        message.textContent = "Congratulation that is a great result!";
    } else if (percentage >= 50) {
        message.textContent = " Hey not bad 50/50!";
    } else if (percentage >= 30) {
        message.textContent = " Great effort!";
    } else if (percentage >= 10) {
        message.textContent = "Not too bad, keep learning";

    } else {
        message.textContent = "Hey don't worry you can always try again :)!";
    }

    endStreetConfetti();
}


/* the restart button and going back to start screen */
restartQuizButton.addEventListener('click', restartGame);
function restartGame() {
    stopConfetti = true;
    if (confetti.reset) confetti.reset();
    currentQuestionIndex = 0;
    scorePoints = 0;
    scoreSpan.textContent = scorePoints;
    soundMuted = true;
    muteIcon.src = "assets/images/mute.png";
    endQuizSound.pause();
    endQuizSound.currentTime = 0;

    resetQuestions();

    difficultyButtons.forEach(btn => {
        btn.classList.remove("selected");
       
    });
    topicButtons.forEach(btn => {
        btn.classList.remove("selected");
       
    });

    selectedDifficulty = "";
    selectedTopic = "";
    endScreen.classList.remove("active");
    startScreen.classList.add("active");
}


/* clear questions/answers before next quiz starts */
function resetQuestions() {

    // clear previous answers
    answersContainer.innerHTML = "";

    // clear previous question
    currentQuestionEl.textContent = "";

    // clear previous question-number
    currentQuestionNumber.textContent = 0;

    /* clear progress bar status */
    const progressMark = 0;
    progressBar.style.width = progressMark + "%";
}


/* code from confetti https://www.kirilv.com/canvas-confetti/ */
function endStreetConfetti() {
    var end = Date.now() + (10 * 1000);

    // confetti colors
    var colors = ['#f72419f8', ' #FFD700', ' #1A021CFF'];

    (function frame() {
        if (stopConfetti) return;
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 65,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 65,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}