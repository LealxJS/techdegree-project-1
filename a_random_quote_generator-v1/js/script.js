/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'Happiness is not by chance but by choice.',
    source: 'Jim Rohn',
    citation: 'Google',
    year: '',

  }, 
  {
    quote: 'All the world\'s a stage, and all the men and women merely players.',
    source: 'William Shakespeare',
    citation: 'from As You Like It',
    year: '1599',
    tags: '#Lifequotes',
  }, 
  {
    quote: 'To love is to burn, to be on fire',
    source: 'Emma Thompson',
    citation: 'Sense and Sensibility screenplay',
    year: '1995',
  }, 
  {
    quote: 'Take my hand, take my whole life too. For I can\'t help falling in love with you.',
    source: 'Elvis Presley',
    citation: 'Can\'t Help Falling In Love song',
    year: '1961',
    tags: '#Song, #LoveQuote',
  }, 
  {
    quote: 'The only way to do great work is to love what you do.',
    source: 'Steve Jobs, Co-Founder of Apple Inc.',
    citation: 'Commencement Speech at Standford University',
    year: '2005',
    tags: '#Motivation, #Success, #Work',
  }, 
  {
    quote: 'In the end, we only regret the chances we didn\'t take.',
    source: 'Lewis Carroll, Author of "Alice\'s Adventures in WonderLand" ',
    citation: 'Alice\'s Adventures in WonderLand',
    year: '1865',
    tags: '#Regret, #Risk, #LifeLesson',
  }, 
  {
    quote: 'Love is composed of a single soul inhabiting two bodies.',
    source: 'Aristotle, Greek philosopher',
    citation: 'Metaphysics',
    year: 'Approximately 4th century BC',
  }, 
  {
    quote: 'Happiness is not something ready-made. It comes from your own actions.',
    source: 'Dalai Lama XIV, Spiritual leader of Tibetan Buddhism',
    citation: '',
    year: '',
  }, 
  {
    quote: 'The future belongs to those who believe in the beauty of their dreams.',
    source: 'Eleanor Roosevelt, Former First Lady of the United States',
    citation: 'Speech to the graduates of the Tuskegee Institute',
    year: '1939',
  }, 
  {
    quote: 'The only limit to our realization of tomorrow will be our doubts of today.',
    source: 'Franklin D. Roosevelt, 32nd President of the United States',
    citation: '',
    year: '',
  }, 
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela, Former President of South Africa and anti-apartheid revolutionary',
    citation: '',
    year: '',
  }
];

const time = 2500;
let currentIndex;

/**
 *  This function returns a number between 0 and the maxNumber
 * @return number
 */

function getRandomNum(maxNumber) {

  return Math.floor(Math.random() * maxNumber);
}

/*

Function that will produce the numbers for the array to be used in randomRGB

*/
function rgbProducer() {
  const randomRGB = [];

  for (let i = 0; i < 3; i++) {
    randomRGB.push(getRandomNum(256));
  }

  return randomRGB;

}

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  

  const randomIndex = getRandomNum(quotes.length);

  if (randomIndex == currentIndex) {
    return getRandomQuote();
  }

  currentIndex = randomIndex;
  return quotes[currentIndex];
}

/***
 * `printQuote` function
***/
function printQuote() {
  let quote = document.querySelector('.quote');
  let author = document.querySelector('.author');
  let citation = document.querySelector('.citation');
  let year = document.querySelector('.year');
  let tags = document.querySelector('.tags');

  const randomRGB = rgbProducer();
  const newQuote = getRandomQuote();

  document.body.style.backgroundColor = `rgb(${randomRGB})`;
  quote.textContent = newQuote.quote;
  author.innerHTML = newQuote.source;
  citation.innerHTML = '..';
  year.innerHTML = '..';
  tags.innerHTML = '';

  if (newQuote.citation && !newQuote.citation == '' && Object.keys(newQuote).includes('citation')) {
    citation.innerHTML = newQuote.citation;
  }

  if (newQuote.year && !newQuote.year == '' && Object.keys(newQuote).includes('year')) {
    year.innerHTML = newQuote.year;
  }

  if (Object.keys(newQuote).includes('tags')) {
    tags.innerHTML = newQuote.tags;
  }
}

/**
 * sets the interval for automatic use of the print quote function
 */

setInterval(printQuote, time);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);