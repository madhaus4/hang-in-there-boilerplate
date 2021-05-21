// QUERYSELECTORS
var posterImg = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
var posterForm = document.querySelector('.poster-form');
var posterMain = document.querySelector('.main-poster');
var savedPostersView = document.querySelector('.saved-posters');
var formURL = document.querySelector('#poster-image-url');
var formTitle = document.querySelector('#poster-title');
var formQuote = document.querySelector('#poster-quote');



// BUTTONS
var showRandomBtn = document.querySelector('.show-random');
var showFormBtn = document.querySelector('.show-form');
var showSavedPostersBtn = document.querySelector('.show-saved');
var showMainBtn = document.querySelector('.show-main');
var backToMainBtn = document.querySelector('.back-to-main');
var makePosterBtn = document.querySelector('.make-poster');

var savedPosters = [];
var currentPoster;

// EVENTLISTENERS
document.addEventListener('DOMContentLoaded', randomizePoster);
showRandomBtn.addEventListener('click', randomizePoster);
showFormBtn.addEventListener('click', showFormView);
showSavedPostersBtn.addEventListener('click', showSavedPostersView);
showMainBtn.addEventListener('click', showMainView);
backToMainBtn.addEventListener('click', showBackToMainView);
makePosterBtn.addEventListener('click', function() {
  saveUserData(formURL.value, formTitle.value, formQuote.value)
})



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

function saveUserData(imageURL, title, quote) {
  event.preventDefault()

  images.push(imageURL)
  titles.push(title)
  quotes.push(quote)

  currentPoster = new Poster(imageURL, title, quote)
  posterImg.src = currentPoster.imageURL;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
  showMainView()
}
