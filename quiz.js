const quizzes = {
    Quotes: {
        title: "Dumb Quotes I've said",
        questions: [
            {
                question: "Which of these quotes have I not said",
                options: ["Theres no k in Nicks stupid", "Scott, what team is Larry Bird on", "The White Socks are real!", "I thought Babe Ruth was Black!"],
                answer: 2
            },
            {
                question: "Which of these quotes have I not said",
                options: ["Scott, what team is Yao Ming on?", "OJ played basketball not baseball", "I thought Gronk Gronkowski was his real name!", "Scott, what team was Shaq on?"],
                answer: 1
            },
            {
                question: "Which of these quotes have I not said",
                options: ["The Cubs are a New York team because I say so", "Theres no k in Nicks stupid", "The Broncos are from the Bronx", "The Buccaneers are for Miami right?"],
                answer: 3
            },
        ] 
    },
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0; // Keep track of correct answers

function startQuiz(quizKey) {
    const quiz = quizzes[quizKey];
    if (!quiz) return;

    // Clear previous text before starting new quiz
    document.getElementById("quizContainer").innerHTML = `
        <h2 id="quizTitle"></h2>
        <div id="quizQuestion"></div>
        <div id="quizOptions"></div>
    `;

    document.getElementById("quizTitle").textContent = quiz.title;
    document.getElementById("quizContainer").style.display = "block";

    currentQuiz = quiz.questions;
    currentQuestionIndex = 0;
    score = 0; // Reset score
    showQuestion();
}

function showQuestion() {
    const questionData = currentQuiz[currentQuestionIndex];
    document.getElementById("quizQuestion").textContent = questionData.question;

    const optionsDiv = document.getElementById("quizOptions");
    optionsDiv.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className = "btn btn-outline-secondary me-2 mb-2";
        btn.onclick = () => {
            if (index === questionData.answer) {
                btn.classList.remove("btn-outline-secondary");
                btn.classList.add("btn-success");
                score++; // Increase score if correct
            } else {
                btn.classList.remove("btn-outline-secondary");
                btn.classList.add("btn-danger");
            }
            setTimeout(nextQuestion, 800);
        };
        optionsDiv.appendChild(btn);
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quizContainer").innerHTML = `
        <h2>Quiz Over! Thanks for playing!</h2>
        <p>You scored ${score} out of ${currentQuiz.length}!</p>
    `;
    // Show the images again when quiz ends
    document.getElementById("quiz-images").classList.remove("hidden");
}

// Add the event listener for the "Start Quiz" button
document.getElementById("startQuizBtn").onclick = function() {
    document.getElementById('startQuizBtn').classList.add('d-none')
    startQuiz("Quotes"); // Start the quiz with the 'Quotes' quiz
};