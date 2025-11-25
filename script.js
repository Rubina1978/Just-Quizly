


/*DOM elements*/

/*screens*/
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');

/*difficulty*/
const difficultyButtons = document.querySelectorAll('.difficulty'); /*recommended by chatgpt*/

/*topic*/
const topicButtons = document.querySelectorAll('.topic-btn'); /*best practice by chatgpt*/

const startBtn = document.getElementById('start-btn');
const currentQuestionEl = document.getElementById('current-question-text');
const answersContainer = document.getElementById("answers-container");
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');

const restartQuizButton = document.getElementById("restart-btn")
const progressBar = document.getElementById('progress');

const score = document.getElementById('score');
const message = document.getElementById('message');

 const correctAnswerSound = new Audio('correct.mp3');
 const wrongAnswerSound = new Audio('wronganswer.mp3');


let scorePoints = 0;
let currentQuestionIndex = 0;

// function to prepare quiz based on selected difficulty and topics corrected with help of chatgpt
let questions = []
let selectedDifficulty = "";
let selectedTopic = "";

function prepareQuiz() {

    // difficulty buttons
    
    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedDifficulty = btn.dataset.difficulty;
            /* adding disabled classes to rest of the options when option selected*/
            difficultyButtons.forEach(b => {
                if (b === btn) {
                    b.classList.add("selected");
                    b.disabled = false;
                } else {
                    b.classList.remove("selected");
                    b.classList.add("disabled");
                    b.disabled = true;
                }
            });
        });
    });

    // topic buttons
    const topicButtons = document.querySelectorAll('.topic-btn');
    topicButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedTopic = btn.dataset.category;
            /* adding disabled classes to rest of the options when option selected*/
            topicButtons.forEach(b => {
                if (b === btn) {
                    b.classList.add("selected");
                    b.disabled = false;
                } else {
                    b.classList.remove("selected");
                    b.classList.add("disabled");
                    b.disabled = true;

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
    
    /* added progress marking*/
     const progressMark = (currentQuestionIndex / questions.length) * 100;
     progress.style.width = progressMark + "%";
     
    
     /*clear questions answers before next question */
    const question = questions[currentQuestionIndex];
    answersContainer.innerHTML = ""; // clear previous answers

    questionEl.textContent = decodeHTML(question.question); 

    const decodedCorrect = decodeHTML(question.correct_answer);

    let answers = [...question.incorrect_answers, question.correct_answer];

/* shuffle answers*/
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
  /*shuffle answers part two*/
function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

/* decoding questions to html text, code help from mentor*/
function decodeHTML(str) {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}


/* handling answers from questions and showing correct and incorrect, code helped by mentor then adjusted to fix an error not displaying answer buttons*/
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
            correctAnswerSound.play();
            scorePoints++;
        document.getElementById("score").textContent = scorePoints;
        
    // });

    // // highlight the clicked wrong answer
    // if (selectedAnswer !== correctAnswer) {
    //    
    } else {
        // User clicked wrong answer
        clickedBtn.classList.add("incorrect");
        wrongAnswerSound.play(); // Play sound ONLY if wrong button clicked

        // Highlight the correct answer, but do NOT play any sound
        buttons.forEach(btn => {
            if (btn.dataset.answer === correctAnswer) {
                btn.classList.add("correct");
            }
        });
    }

    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestions();
        } else {
            showResults()

}
        
    }, 1000);
}

function showResults() {
    document.getElementById("restart-btn").addEventListener('click', () => {
    const diffBtns = document.querySelectorAll('.difficulty');
    const topBtns = document.querySelectorAll('.topic-btn');
    
});
            quizScreen.classList.remove('active');
            endScreen.classList.add('active');
           
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
            } else if  (percentage >= 10) {
                message.textContent = "Not too bad, keep learning";

            } else { message.textContent = "Hey don't worry you can always try again :)!";
            }
    
        endStreetConfetti();  
}



document.getElementById("restart-btn").addEventListener('click', () => {
    scorePoints = 0;
    currentQuestionIndex = 0;
    document.getElementById("score").textContent = scorePoints;
   
    difficultyButtons.forEach(btn => {
        btn.classList.remove("selected");
         btn.classList.remove("disabled");
         btn.disabled = false;
    })
    topicButtons.forEach(btn => {
        btn.classList.remove("selected");
        btn.classList.remove("disabled");
        btn.disabled = false;
    })
    selectedDifficulty = "";
    selectedTopic = "";
    endScreen.classList.remove("active");
    startScreen.classList.add("active");
});

/*code from confetti https://www.kirilv.com/canvas-confetti/ */
function endStreetConfetti (){
var end = Date.now() + (15 * 1000);

// go Buckeyes!
var colors = ['#f72419f8', ' #FFD700', ' #1A021CFF)'];

(function frame() {
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


