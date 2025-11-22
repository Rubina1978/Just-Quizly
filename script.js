


/* buttons and selects */
const difficultySelect = document.querySelectorAll('.difficulty'); /*recommended by chatgpt*/
const topicsSelect = document.querySelectorAll('.topic-btn'); /*best practice by chatgpt*/
const startBtn = document.getElementById('start-btn');
const currentQuestionEl = document.getElementById('current-question-text');
const answersContainer = document.getElementById("answers-container");
const nextbtn = document.getElementById('custom-btn-next');
const progress = document.getElementById('progress');
const endScore = document.getElementById('final-score');
const scoreMax = document.getElementById('max-score');
const message = document.getElementById('message');

const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const endScreen = document.getElementById('end-screen');


let scorePoints = 0;
let progressBarWidth = 0;
let currentQuestionIndex = 0;

// function to prepare quiz based on selected difficulty and topics corrected with help of chatgpt
let questions = []
let selectedDifficulty = "";
let selectedTopic = "";
function prepareQuiz() {

    

    // difficulty buttons
    const difficultyButtons = document.querySelectorAll('.difficulty');
    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedDifficulty = btn.dataset.difficulty;
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
    startBtn.addEventListener('click', async () => {
        if (!selectedDifficulty || !selectedTopic) {
            alert("Please select difficulty and topic before starting the quiz!");
            return;
        }

        startScreen.classList.remove('active');
        quizScreen.classList.add('active');
        
    /*updated to make fetch questions work*/
        questions = await fetchQuestions(selectedDifficulty, selectedTopic);
        console.log("Fetched questions", questions);
        displayQuestions();
    });
}

prepareQuiz();

/* get questions, code corrected with chatgpt*/
async function fetchQuestions(difficulty, topic) {
    const apiUrl = `https://opentdb.com/api.php?amount=10&category=${topic}&difficulty=${difficulty}&type=multiple`;

    try {
       const response = await fetch(apiUrl);
       if (!response.ok) {
        throw new error ('error fetching questions');
       }
    const data = await response.json();
    return data.results;
    } catch (error) {
        console.log(error);
        return [];
    }  
}

/*display and decode question had to build with chatgpt */
function displayQuestions() {
    const answersContainer = document.getElementById("answers-container");
    const questionEl = document.getElementById("current-question-text");

    document.getElementById("current-question-number").textContent = currentQuestionIndex + 1;

    const question = questions[currentQuestionIndex];
    answersContainer.innerHTML = "";
    questionEl.textContent = decodeHTML(question.question).trim();

    const decodedCorrect = decodeHTML(question.correct_answer).trim();

    let answers = [
        ...question.incorrect_answers,
        question.correct_answer
    ];

    answers = shuffle(answers);

    answers.forEach(answerText => {
        const btn = document.createElement("button");
        btn.className = "custom-btn-answer";
        const decodedAnswerText = decodeHTML(answerText).trim();
        btn.textContent = decodedAnswerText;
        // Store the answer and correct answer on the button
        btn.dataset.answer = decodedAnswerText;
        btn.dataset.correctAnswer = decodedCorrect;

        btn.addEventListener("click", (e) => selectAnswer(e.currentTarget));

        answersContainer.appendChild(btn);
    });
}
  
function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

/* decoding questions to html text, code help from mentor*/
function decodeHTML(str) {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}


/* handling answers from questions and showing correct and incorrect, code helped by mentor Tim*/
function selectAnswer(clickedBtn) {
    const buttons = answersContainer.querySelectorAll("button");
    const correctAnswer = clickedBtn.dataset.correctAnswer;
    const selectedAnswer = clickedBtn.dataset.answer;

    // disable all buttons
    buttons.forEach(btn => btn.classList.add("disabled"));

    // Check if answer is correct or incorrect
    if (selectedAnswer === correctAnswer) {
        // CORRECT - highlight only the clicked button GREEN
        clickedBtn.classList.add("correct");
        scorePoints++;
        document.getElementById("score").textContent = scorePoints;
    } else {
        // INCORRECT - highlight only the clicked button RED
        clickedBtn.classList.add("incorrect");
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestions();
        } else {
            quizScreen.classList.remove('active');
            endScreen.classList.add('active');
            document.getElementById("final-score").textContent = scorePoints;
            document.getElementById("max-score").textContent = questions.length;
}
        
    }, 1000);
}

