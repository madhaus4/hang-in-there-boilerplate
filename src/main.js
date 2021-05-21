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
var savedPostersGrid = document.querySelector('.saved-posters-grid');


// BUTTONS
var showRandomBtn = document.querySelector('.show-random');
var showFormBtn = document.querySelector('.show-form');
var showSavedPostersBtn = document.querySelector('.show-saved');
var showMainBtn = document.querySelector('.show-main');
var backToMainBtn = document.querySelector('.back-to-main');
var makePosterBtn = document.querySelector('.make-poster');
var saveThisPosterBtn = document.querySelector('.save-poster');

var savedPosters = [];
var currentPoster;

// EVENTLISTENERS
document.addEventListener('DOMContentLoaded', randomizePoster);
showRandomBtn.addEventListener('click', randomizePoster);
showFormBtn.addEventListener('click', showFormView);
showSavedPostersBtn.addEventListener('click', showSavedPostersView);
showMainBtn.addEventListener('click', showMainView);
backToMainBtn.addEventListener('click', showBackToMainView);
saveThisPosterBtn.addEventListener('click', saveCurrentPoster);
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

  currentPoster = new Poster(posterImg.src, posterTitle.innerText, posterQuote.innerText);
}

function showFormView() {
  posterForm.classList.remove('hidden');
  posterMain.classList.add('hidden');
}

function showSavedPostersView() {
  savedPostersView.classList.remove('hidden');
  posterMain.classList.add('hidden');
  displayPosters();
}

function displayPosters() {
  for (var i = 0; i < savedPosters.length; i++) {
    savedPostersGrid.innerHTML += `
      <div class="mini-poster">
        <img class="poster-img" src=${savedPosters[i].imageURL} alt="nothin' to see here">
        <h2 class="poster-title">${savedPosters[i].title}</h2>
        <h4 class="poster-quote">${savedPosters[i].quote}</h4>
      </div>
    `;
  }
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

function saveCurrentPoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  }
}


// Pseudocode


// From the saved posters view double click to remove poster from view and savedPosters array.
//create event listener for double click event

// utilize .target to allow double click to track which element
//loop through savedPosters
//if target and savedPosters index are the same remove the object from array
//remove element from DOM
//remove from savedPosters
