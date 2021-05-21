// QUERYSELECTORS
var posterImg = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
var posterForm = document.querySelector('.poster-form');
var posterMain = document.querySelector('.main-poster');
var savedPostersView = document.querySelector('.saved-posters');



// BUTTONS
var showRandomBtn = document.querySelector('.show-random');
var showFormBtn = document.querySelector('.show-form');
var showSavedPostersBtn = document.querySelector('.show-saved');
var showMainBtn = document.querySelector('.show-main');
var backToMainBtn = document.querySelector('.back-to-main');

var savedPosters = [];
var currentPoster;

// EVENTLISTENERS
document.addEventListener('DOMContentLoaded', randomizePoster);
showRandomBtn.addEventListener('click', randomizePoster);
showFormBtn.addEventListener('click', showFormView);
showSavedPostersBtn.addEventListener('click', showSavedPostersView);
showMainBtn.addEventListener('click', showMainView);
backToMainBtn.addEventListener('click', showBackToMainView);



// EVENTHANDLERS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizePoster() {
  posterImg.src = images[getRandomIndex(images)];
  posterTitle.innerText = titles[getRandomIndex(titles)];
  posterQuote.innerText = quotes[getRandomIndex(quotes)];
}

function showFormView() {
  posterForm.classList.remove('hidden');
  posterMain.classList.add('hidden');
}

function showSavedPostersView() {
  savedPostersView.classList.remove('hidden');
  posterMain.classList.add('hidden');
}

function showMainView() {
  posterMain.classList.remove('hidden');
  posterForm.classList.add('hidden');
}

function showBackToMainView() {
  posterMain.classList.remove('hidden');
  savedPostersView.classList.add('hidden');
}




// Creating a New Poster
// task 1 >> on new poster form view, users should be about to fill out three input fields and then hit show my poster btn
  // create 3 QS: '#poster-image-url' , '#poster-title' , '#poster-quote'
  // create QS for '.make-poster' btn
  // create eventListener for said btn

  // create function saveUserData()
  // create a push for each input.value into respective arrays
  // create instance called currentPoster of Poster class using input values as args (title, quote, img)

  // task 2 >> when the show my poster btn is clicked, several things will happen --
  // create function showUserData()
    // display user input values as poster
    // var.innerText = currentPoster.title, quote, url(src)
    // call showMainView()
