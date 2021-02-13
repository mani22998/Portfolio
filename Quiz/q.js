const quizData = [


{
   question : "Which is most reliable car in canada",

   a:"Civic",
   b:"Camry",
   c:"Jetta",
   d:"Elentra",
   correct:"b",
},
{
   question : "Most visited place in Ontario ",

   a:"Cn tower",
   b:"Niagara Falls",
   c:"Toronto zoo",
   d:"Vilson park",

   correct:"a",
},
{
   question : "The Most cold month of Ontario ",

   a: "January",
   b:"March",
   c:"Dec",
   d:"Sep",

   correct:"c",
},
{
   question : "Which job is considered the most easiest job in Ontario",

   a: "Uber",
   b:"Security",
   c:"Police ",
   d:"Loading unloading",

   correct:"b",
}

]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz () {
	deselectAnswers();
	const currentQuizData = quizData[currentQuiz];
     questionEl.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

}

loadQuiz();


function getSelected () {

      let answer = undefined;

      answerEls.forEach((answerEL)=> {
            if(answerEL.checked)
            {
            	answer = answerEL.id;
            }
      	
      });

      return answer;

	}

function deselectAnswers () {
	answerEls.forEach(answerEL=> {
            answerEL.checked = false;
      	
      });
}

submit.addEventListener("click", ()=>{

  const answer = getSelected();
   
   if(answer){
         if(answer === quizData[currentQuiz].correct){

         	score++;
         }
         
         currentQuiz++;

         if(currentQuiz < quizData.length){
         	loadQuiz();
         }
         else{
         	quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length}</h2>`;
         }

   }











});