const explicit_words_file = "explicit.txt"
const grated_words_file = "grated.txt"
const end_punctuation_file = "endpunctuation.txt"
const middle_punctuation_file = "middlepunctuation.txt"

var result = generate(5, true);
console.log(result);

function generate(paragraphs, explicit) {
   var result = generateSentence(explicit);

   for (a = 1; a < paragraphs; a++) {
      result += (" " + generateSentence(explicit));
   }

   return result;
}

// sentence is between 5 - 10 words
function generateSentence(explicit) {
   // randly generate # of words (5 - 10)
   var numWords = Math.floor(Math.random() * 5) + 5;
   // capitalize the first word
   var firstWord = generateWord(explicit);
   var sentence = (firstWord.charAt(0).toUpperCase() + firstWord.slice(1));

   for (b = 0; b < numWords; b++) {
      sentence += (" " + generateWord(explicit));

      // include mid-sentence punctuation 10% of the time
      if (Math.floor(Math.random() * 10) == 1) {
         sentence += generateMiddleSentencePunctuation();
      }
   }

   // ending punctuation
   sentence += generateEndPunctuation();

   return sentence;
}

function generateWord(explicit) {
   // if explicit mode is on, 25% chance word generated will be explicit
   var odds = Math.floor(Math.random() * 10);
   var filename = grated_words_file;

   // explicit word
   if (explicit && odds < 3) {
      filename = explicit_words_file;
   } 

   return getRandomWordFromFile(filename);
}

function generateMiddleSentencePunctuation() {
   return getRandomWordFromFile(middle_punctuation_file);
}

function generateEndPunctuation() {
   return getRandomWordFromFile(end_punctuation_file);
}

function getRandomWordFromFile(filename) {
   var fs = require('fs');
   var array = fs.readFileSync(filename).toString().split("\n");
   return array[Math.floor(Math.random()*array.length)];
}
