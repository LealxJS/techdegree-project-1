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
const quotes = [{
  quotes:'Happiness is not by chance but by choice.',
  source:'Jim Rohn',
  citation:'Google',
  year:'',

}, {
  quotes:'All the world\'s a stage, and all the men and women merely players.',
  source:'William Shakespeare',
  citation:'from As You Like It',
  year:'1599',
  tags:'#Lifequotes',
}, {
  quotes:'To love is to burn, to be on fire',
  source:'Emma Thompson',
  citation:'Sense and Sensibility screenplay',
  year:'1995',
}, {
  quotes:'Take my hand, take my whole life too. For I can\'t help falling in love with you.',
  source:'Elvis Presley',
  citation:'Can\'t Help Falling In Love song',
  year:'1961',
  tags:'#Song, #LoveQuote',
}, {
  quotes:'The only way to do great work is to love what you do.',
  source:'Steve Jobs, Co-Founder of Apple Inc.',
  citation:'Commencement Speech at Standford University',
  year:'2005',
  tags:'#Motivation, #Success, #Work',
}, {
  quotes:'In the end, we only regret the chances we didn\'t take.',
  source:'Lewis Carroll, Author of "Alice\'s Adventures in WonderLand" ',
  citation:'Alice\'s Adventures in WonderLand',
  year:'1865',
  tags:'#Regret, #Risk, #LifeLesson',
}, {
  quotes:'Love is composed of a single soul inhabiting two bodies.',
  source:'Aristotle, Greek philosopher',
  citation:'Metaphysics',
  year:'Approximately 4th century BC',
}, {
  quotes:'Happiness is not something ready-made. It comes from your own actions.',
  source:'Dalai Lama XIV, Spiritual leader of Tibetan Buddhism',
  citation:'',
  year:'',
}, {
  quotes:'The future belongs to those who believe in the beauty of their dreams.',
  source:'Eleanor Roosevelt, Former First Lady of the United States',
  citation:'Speech to the graduates of the Tuskegee Institute',
  year:'1939',
}, {
  quotes:'The only limit to our realization of tomorrow will be our doubts of today.',
  source:'Franklin D. Roosevelt, 32nd President of the United States',
  citation:'',
  year:'',
}, {
  quotes:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  source:'Nelson Mandela, Former President of South Africa and anti-apartheid revolutionary',
  citation:'',
  year:'',
}];
const time = 2500;
let ranIndex;
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let citation = document.querySelector('.citation');
let year = document.querySelector('.year');
let tags = document.querySelector('.tags');
let randomRGB = [];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){

   let ranNum = Math.floor(Math.random()*quotes.length);
   
   if (ranNum === ranIndex){
    return getRandomQuote();
   } else{
    ranIndex = ranNum;
    return ranIndex;
   }
}


/*

rgbProducer is a function that will produce the numbers for the array to be used in the 
rgb colors and it automatically replaces a new set when the array is full and used.

*/
function rgbProducer(){
    let number;
    for(let i = 0; i < 3; i++){
        number = Math.floor(Math.random() * 256);
        randomRGB.push(number);
    }
    randomNGcolors();

    return randomRGB;
}
const randomNGcolors = function() {
    if (randomRGB.length > 3){
        randomRGB.splice(0,3);
    }
}

/***
 * `printQuote` function
***/
function printQuote(){
  getRandomQuote();
  rgbProducer();
    document.body.style.backgroundColor = `rgb(${randomRGB})`;
    quote.textContent = `${quotes[ranIndex].quotes}`;
    author.innerHTML = `${quotes[ranIndex].source}`;

    if(quotes[ranIndex].citation && !quotes[ranIndex].citation == '' && Object.keys(quotes[ranIndex]).includes('citation')){
      citation.innerHTML = `${quotes[ranIndex].citation}`;
    } else {
      citation.innerHTML = `..`;
    }
    if(quotes[ranIndex].year && !quotes[ranIndex].year == '' && Object.keys(quotes[ranIndex]).includes('year')){
      year.innerHTML = `${quotes[ranIndex].year}`;
      } else {
      year.innerHTML = `..`;
    }
    if(!Object.keys(quotes[ranIndex]).includes('tags')){
      tags.innerHTML = '';
    } else{
      tags.innerHTML = `${quotes[ranIndex].tags}`;
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