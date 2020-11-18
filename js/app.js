//Variables holding the DOM elements 
const addQuesBtn = document.querySelector('#show-btn');
const form = document.querySelector('#question-form');
const cardDiv = document.querySelector('.card');
const closeQuesBtn = document.querySelector('.close-btn');
const questionInput = document.querySelector('#question-input');
const answerInput = document.querySelector('#answer-input');

let card;

addQuesBtn.addEventListener('click', (e) => {
    card = new Cards;
    card.openFlashCard();
})
closeQuesBtn.addEventListener('click', (e) => {
    card = new Cards;
    card.closeFlashCard();
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    card = new Cards;
    const errorMsg = card.feedBack();
    if(!errorMsg) {
    const question = questionInput.value;
    const answer = answerInput.value;

    card.createCards(question, answer);
    questionInput.value = '';
    answerInput.value = '';
    }    
})