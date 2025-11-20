


/* buttons and selects */
const dificultySelect = document.querySelectorAll('.dificulty'); /*recommended by chatgpt*/
const topicsSelect = document.querySelectorAll('.topic-btn'); /*best practice by chatgpt*/
const startBtn = document.getElementById('start-btn');
const currentQuestionEl = document.getElementById('current-question-text');
const answersContainer = document.getElementById("answers-container");
const nextbtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const score = document.getElementById('score');
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
let selectedDifficulty = "";
    let selectedTopic = "";
function prepareQuiz() {

    

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

/*display and decode question had to build with chatgpt*/
function displayQuestions() {
    const answerContainer = document.getElementById("answer-container");
    const questionEl = document.getElementById("current-question-text");

    const question = questions[currentQuestionIndex];

    questions.innerHTML = "";

    questionEl.textContent = decodeHTML(questions.question);

    const answers = [...questions.incorrect_answers, questions.correct_answer];

    /*buttons for each question*/
    answers.forEach(answerText => {
        const btn = document.createElement("button");
        btn.classList.add("custom-btn-answer");
        btn.textContent = decodeHTML(answerText);
        
        btn.addEventListener("click", () => selectAnswer(answerText, q.correct_answer, q.incorrect_answers));

        answersContainer.appendChild(btn);
    });
}
