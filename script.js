const quizData = [
    {
        question: 'What is the most popular language in the world?',
        a: 'Mandarin',
        b: 'English',
        c: 'Russian',
        d: 'Mandarin',
        correct : 'b'
    },{
        question: 'What is the most popular coding language in 2021?',
        a: 'Python',
        b: 'Java',
        c: 'c++',
        d: 'JavaScript',
        correct : 'a',

     },{
         question : 'What is the highest paying programming languages 2021?',
         a: 'Go',
         b: 'Objcet C',
         c: 'C#',
         d: 'Scala',
         correct: 'd'

     },{
         question : 'Who is the President of Bangladesh?',
         a: 'Sheikh Hasina',
         b: 'Abdul Hamid',
         c: 'Obydul Kder',
         d: 'Sharmin Akter',
         correct: 'b'
     },{
         question: 'What is the full meaning of HTML?',
         a: 'Cashcarding Style Shit',
         b: 'Hyper Text Markup Language',
         c: 'Hypertext Preprocessor',
         d: 'Helicopter Terminals Motorboats Language',
         correct: 'b'
     }

];

const answerEL = document.querySelectorAll('.answer');
const questionEL = document.getElementById ('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById ('a_text');
const b_text = document.getElementById ('b_text');
const c_text = document.getElementById ('c_text');
const d_text = document.getElementById ('d_text');
const submitBtn = document.getElementById ('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz () {
    diselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getselected() {
    // const answerEL = document.querySelectorAll('answer');

    let answer = undefined;

    answerEL.forEach((answerEL) => {
        if (answerEL.checked) {
            answer = answerEL.id;
        }
    })

    return answer;
}

function diselectAnswer() {

    answerEL.forEach((answerEL) => {
        answerEL.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getselected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz(); 
        } else{
           quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }

});
