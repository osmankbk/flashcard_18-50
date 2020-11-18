class Cards {
    constructor() {

    }
//This Func creates the div flash card and appends it to the DOM
    createCards = (question, answer) => {
        const questAnsContainer = document.querySelector('#questions-list');
        let emptyBox = [];

        const newCard = document.createElement('div');
        newCard.classList.add('col-md-4');
        newCard.innerHTML = `<div class="card card-body flashcard my-3">
         <h4 class="text-capitalize">${question}</h4>
         <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
         <h5 class="answer mb-3">${answer}</h5>
         <div class="flashcard-btn d-flex justify-content-between">

          <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a>
          <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
         </div>
         </div>`;
         questAnsContainer.appendChild(newCard);
         emptyBox.push(newCard);
         this.cardBtnsFunctions(emptyBox);
    }
//This func handles the flash card buttons functionality
    cardBtnsFunctions = (cardList) => {
        const questionInput = document.querySelector('#question-input');
        cardList.forEach(card => {
            card.addEventListener('click', (e) => {
                if(e.target.textContent === 'show/hide answer') {
                    e.target.nextElementSibling.classList.toggle('showItem');
                }  else if(e.target.textContent === 'edit') {
                    const answer = card.querySelector('h4');
                    questionInput.value = answer.textContent;
                    card.parentElement.removeChild(card);
                } else if(e.target.textContent === 'delete') {
                    card.parentElement.removeChild(card);
                }
            })
        });
    }
//The error message function
    feedBack = () => {
        const questionInput = document.querySelector('#question-input');
        const answerInput = document.querySelector('#answer-input');
        const feedbackDiv = document.querySelector('.feedback');
        let isTrue = false;
        if(questionInput.value === '' || answerInput.value === '') {
            isTrue = true;
            feedbackDiv.classList.add('showItem', 'alert-danger');
            setTimeout(() => {
                feedbackDiv.classList.remove('showItem');
            }, 3000)
        }
        return isTrue
    }
//This shows the blank flash card
    openFlashCard = () => {
        cardDiv.classList.add('showItem');
    }
//This closes it
    closeFlashCard = () => {
        cardDiv.classList.remove('showItem');
    }
}