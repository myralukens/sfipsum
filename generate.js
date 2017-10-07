// sentence is between 5 - 10 words
function generateSentence(explicit) {
   // randly generate # of words
   var numWords = Math.floor(Math.random() * 4) + 5;
   // capitalize the first word
   var firstWord = generateWord(explicit);
   var sentence = (firstWord.charAt(0).toUpperCase() + firstWord.slice(1));

   for (c = 0; c < numWords; c++) {
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

function generateWord(isExplicit) {
   // if explicit mode is on, 25% chance word generated will be explicit
   var odds = Math.floor(Math.random() * 10);

   // explicit word
   if (isExplicit && odds < 3) {
      var array = explicit().split("\n");
      return array[Math.floor(Math.random()*array.length)];
   } 

   var array = grated().split("\n");
   return array[Math.floor(Math.random()*array.length)];
}

function generateMiddleSentencePunctuation() {
   var array = middlepunctuation().split("\n");
   return array[Math.floor(Math.random()*array.length)];
}

function generateEndPunctuation() {
   var array = endpunctuation().split("\n");
   return array[Math.floor(Math.random()*array.length)];
}

function grated() {
   return "Blue Bottle\nWeWork\nHayes Valley\nAirbnb\nmezcal\nWarby Parker\nSalesforce Tower\nbottomless mimosas\nLa Croix\nUber bros\ndog turd\nmission bars\nthe rent\nchihuahua mix\nstartup\ncoworking\nnetworking\ncold brew\nventure capital\nVC\nseed funding\nyoga\nSoulcycle\nBART\nMUNI\ndogwalk\nubered\nlyft\nuber\nbrainstorm\nfundraise\ncreate\nCaltrain\nhike\nbike ride\nPAC Heights\nThe Marina\nSOMA\nFiDi\nDivis\nAmazon Fresh\nAmazon Prime\nInstacart\nKarl the fog\nPatagucci\nPatagonia\nbay area\nbae area\nlit\nchill\nScoot\nscooter\nboosted board\ngentrification\ncorporate shuttle\nGoogle bus\noverthrowing technology companies\nnah\ntryna\nyee\nAlcatraz\nchic\nDolores Park\nfleet week\ndog\npurebred dog\nhypoallergenic dog\nSunday brunch\nviews\nelectric bike\nNob Hill\nNorth Beach\nbridge\nviews\nhippie\nmaternal heights\npublic transportation\nmusic festival\nOutside Lands\ntraffic\nwaiting in lines\nlines\nbarista\ncoffee\nthe 415\nno parking\nparking\nexpensive\nrent\nBurning Man\nthe Giants\nAT&T Park\nOracle Arena\nOakland peasants\nfake service animals\nyoga pants\ntop 1%\n1% of 1%\nlesbian cat sweater\nMission hipsters\nhipsters\navant garde\nartists\nartistic\ntech\ntechnology\nwhite people\ndiversity\nequality\nwomen's rights\nfeminism\nfeminists\nwhite, heterosexual men\nSpanish\nculture\nFerry Building\ntourists\nthe city\ngarden\nmuseums\nnight life at museums\nLyft";
}

function explicit() {
   return "Mark Zuckerberg's dick\nfuck\ngod damn\nshit\nmother effing\nhella\ndick\nmofo\nweed at Dolores Park\nday drinking\ngay culture\nFolsom Street Fair\nnaked homeless people\nso many lesbians\nalcohol\ndrugs\nhangover\nrum and mango juice\nasshole\nMarc Benioff's 9-inch dick\nJack Dorsey's ass";
}

function middlepunctuation() {
   return ",\n...\n;\n:";
}

function endpunctuation() {
   return "!\n.\n...\n?";
}
