// QUERYSELECTORS
var posterImg = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');

// BUTTONS
var showRandomBtn= document.querySelector('.show-random');

var savedPosters = [];
var currentPoster;

// EVENTLISTENERS
document.addEventListener('DOMContentLoaded', randomizePoster);
showRandomBtn.addEventListener('click', randomizePoster);

// EVENTHANDLERS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizePoster() {
  posterImg.src = images[getRandomIndex(images)];
  posterTitle.innerText = titles[getRandomIndex(titles)];
  posterQuote.innerText = quotes[getRandomIndex(quotes)];
}

// on page load, should view poster with randomly selected img
// img contains >>> img, title, quote
