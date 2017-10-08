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
      if (c < (numWords - 1) && Math.floor(Math.random() * 10) == 1) {
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
   return "Blue Bottle\nWeWork\nHayes Valley\nAirbnb\nmezcal\nWarby Parker\nSalesforce Tower\nbottomless mimosas\nLa Croix\nUber bros\n"
      + "dog turd\nmission bars\nthe rent\nchihuahua mix\nstartup\ncoworking\nnetworking\ncold brew\nventure capital\nVC\nseed funding\n"
      + "yoga\nSoulcycle\nBART\nMUNI\ndogwalk\nubered\nlyft\nuber\nbrainstorm\nfundraise\ncreate\nCaltrain\nhike\nbike ride\nPAC Heights\n"
      + "The Marina\nSOMA\nFiDi\nDivis\nAmazon Fresh\nAmazon Prime\nInstacart\nKarl the fog\nPatagucci\nPatagonia\nbay area\nbae area\n"
      + "lit\nchill\nScoot\nscooter\nboosted board\ngentrification\ncorporate shuttle\nGoogle bus\noverthrowing technology companies\nnah\n"
      + "tryna\nyee\nAlcatraz\nchic\nDolores Park\nfleet week\ndog\npurebred dog\nhypoallergenic dog\nSunday brunch\nviews\nelectric bike\n"
      + "Nob Hill\nNorth Beach\nbridge\nviews\nhippie\nmaternal heights\npublic transportation\nmusic festival\nOutside Lands\ntraffic\n"
      + "waiting in lines\nlines\nbarista\ncoffee\nthe 415\nno parking\nparking\nexpensive\nrent\nBurning Man\nthe Giants\nAT&T Park\n"
      + "Oracle Arena\nOakland peasants\nfake service animals\nyoga pants\ntop 1%\nlesbian cat sweater\nMission hipsters\nhipsters\n"
      + "avant garde\nartists\nartistic\ntech\ntechnology\nwhite people\ndiversity\nequality\nwomen's rights\nfeminism\nfeminists\n" 
      + "white, heterosexual men\nSpanish\nculture\nFerry Building\ntourists\nthe city\ngarden\nmuseums\nnight life at museums\nLyft\n"
      + "smart home\npaid maternity leave\nboho\ndesign\nrogue\nhipster mustache\nbeard\nvibrant culture\nimmigrants welcome\neducated\n"
      + "philanthropy\nskyscraper\ncable cars\nactivism\npark\nEl Farolito\nincome inequality\nreal estate\n500 sq foot apartment\nsocial graph\n"
      + "the cloud\nfog\novercast\nsmog\nhate LA\ntechie\npainted ladies\nhill\nSF\nSan Francisco\nstreet food\nfood cart\ndowntown\n"
      + "deck\nshops\nmid-century modern\ncoffee\nbrewery\nCoit Tower\nChinatown\nauthentic\nT\nsanctuary city\nantifa\nhella\nswoop\n"
      + "toxic masculinity\ntalkative Uber driver\nracially-biased\nrich\nworldly\nglobal citizen\nPlanned Parenthood\nArnold Schwarzenegger\n"
      + "NPR\nliberal media\nthe resistance\nprivilege\npoor people\ngentrification\nminority\nminorities\napp\ndevelopment\nfull-stack\n"
      + "agnostic\ngenderless\nsteep\nhills\ndefy\nthe resistance\nunbaised\nobjective\nscientific\nscience\nglobal warming\nmachine learning\n"
      + "proprietary algorithm\nFillmore\nart\nmusic\nlive\nfree museums\neccentric\nSFMOMA\nsymphony\nzoo\nballet\nKQED\ntheater\n"
      + "improv\ncomedy\nstand-up comedy\nstreet fair\npermit\nregulations\nBi-Rite\nBay Bridge\nGolden Gate\nTransamerica Pyramid\n"
      + "victorian\ncommunity\nmarket\nfarmer's market\nHardly Strictly\nGhirardelli\ndenim\nPhilz\nbicycles\nLevi Strauss\nLevi's\n"
      + "beer on tap\ncraft beer\nsanctuary city\nTreasure Island\nHack Reactor\nPresidio\nRegency Ballroom\nSoylent\nBoba Guys\n"
      + "human rights\nhousing crisis\nvolunteer\nBill Graham\nrooftop\nsmall batch whiskey\npeaceful protest\nprotest";
}

function explicit() {
   return "Mark Zuckerberg's dick\nfuck\ngod damn\nshit\nmother effing\nhella\ndick\nmofo\nweed at Dolores Park\nday drinking\ngay culture\n"
      + "Folsom Street Fair\nnaked homeless people\nso many lesbians\nalcohol\ndrugs\nhangover\nrum and mango juice\nasshole\n"
      + "Marc Benioff's 9-inch dick\nJack Dorsey's ass\ndrinking in the park\nalt-right assholes\nstrippers\nhomeless penises\n"
      + "erect\nAIDS\nnude\npantsless\nGood Vibrations\nsex\npussy\nadderall\nheteronormativity\nbanana hammock\nspeedos\nused condom\n"
      + "abortion\nsexual\nsexy\npolice brutality\nheathen\ngodless\npremarital sex\nsexually adventurous\npolygamy\nopen relationship\n"
      + "fluid sexuality\ngender neutral\nall gender\ndefying gender stereotypes\nsex in a park\nsexually active homeless people\n"
      + "BDSM\nkink\npenis\nvagina\npussy\ncocaine\ncoked out\npubic hair\ngenitalia\nexposed privates\nEaze\nmarijuana\nmedical card\n"
      + "anal sex";
}

function middlepunctuation() {
   return ",\n...\n;\n:\n-\n,\n,\n,";
}

function endpunctuation() {
   return "!\n.\n...\n?\n.\n.";
}
