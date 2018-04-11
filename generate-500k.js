let fs = require("fs");

const getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

///////////////////////////////////////////// Cup records initializations:
const possible_rounds = ["32nd", "16th", "quarter_final", "SemiFinal", "Final"];
let temp_match, temp_round, temp_year, temp_num_ratings, temp_rating;

///////////////////////////////////////////// Players records initializations:
//100 random names (Unique)
const possible_names = [
"Demarcus Rudnick",
"Carmine Kumm",
"Nathanael Westberry",
"Jayson Quattlebaum",
"Lane Barbagallo",
"Freddy Erick",
"Ernest Leroux",
"Scottie Holdren",
"Charley Mclennan",
"Shawn Waltz",
"Grady Mccurry",
"Warren Berkley",
"Toby Rodrigues",
"Hiram Gehring",
"Dusty Bungard",
"Mervin Trunnell",
"Richard Alvino",
"Alex Easton",
"Jeffry Kamrowski",
"Edward Thatcher",
"Irwin Brockett",
"Franklyn Willson",
"Ward Argento",
"Amado Eifert",
"Bart Mcneeley",
"Winston Farmer",
"Dale Hein",
"Stanford Ellenwood",
"Kris Conerly",
"Wyatt Melendy",
"Gavin Clapper",
"Austin Crusoe",
"Johnathan Threet",
"Jewell Schoenrock",
"Al Janke",
"Rodger Jarret",
"Sandy Luciano",
"Joaquin Schon",
"Gregory Pasternak",
"Wm Moxley",
"Lesley Culbert",
"Warner Coley",
"Odell Balducci",
"Deon Benbow",
"Dewayne Lockhart",
"Wilfred Janousek",
"Dudley Juliano",
"Clint Albro",
"Octavio Bakke",
"Wallace Rigo",
"Brant Romans",
"Johnnie Spevak",
"Martin Crimmins",
"Cory Blau",
"Carrol Patz",
"Damien Rivard",
"Freddy Vassar",
"Denis Oberg",
"Willard Lapointe",
"Willian Gaulding",
"Francesco Perryman",
"Aubrey Wickline",
"Glen Broadwell",
"Douglass Hammersley",
"Hershel Rubino",
"Otha Winger",
"Troy Pillai",
"Dominique Cedeno",
"Arlie Dole",
"Sheldon Tedeschi",
"Malcom Labrador",
"Jarrett Canter",
"Donn Luque",
"Thomas Dowdy",
"Adolph Provence",
"Reyes Singley",
"Bret Goddard",
"Eusebio Rowe",
"Gilbert Pellegrini",
"Bud Dunham",
"Coleman Ried",
"Antony Funchess",
"Kareem Bliss",
"Sung Siu",
"Trenton Kumar",
"Edmond Blow",
"Benedict Taliaferro",
"Maxwell Giuffre",
"Refugio Crose",
"Clinton Burdge",
"Kenny Hoerr",
"Ernie Frailey",
"Ivory Gorden",
"Darin Pimentel",
"Devon Kinslow",
"Columbus Ganz",
"Osvaldo Dasilva",
"Isaac Judson",
"Jeromy Conroy",
"Israel Guadalupe"
];

let temp_player, temp_name, playersInCurrentMatch; //To ensure primary key (no 2 players with the same name in a match)

for(let counter = 0; counter < 19; counter++){
	let playersChunk = ``;
	let matchesChunk = ``;
	//Chunk it to avoid heap overflow
	for (let i = (counter * 25000) + 1 ; i <= counter*25000 + 25000; i++) {
	  playersInCurrentMatch = []; //Reset players per match
	  temp_round = possible_rounds[getRandomIntInclusive(0, 4)];
	  temp_year = getRandomIntInclusive(1990, 2018);
	  temp_num_ratings = getRandomIntInclusive(10000, 100000);
	  temp_rating = Math.floor(Math.random() * 60) / 10 + 4;
	  
	  for (let j = 1; j < 23; j++) {
	    //Generating a unique name per match
	    while (true) {
	    	temp_name = possible_names[getRandomIntInclusive(0, 99)];
	    	if (!playersInCurrentMatch.includes(temp_name)) {
	    		break;
	    	}
	    }
	    temp_player = [i, temp_name, temp_year, j];
	    playersChunk += (temp_player.join(", ")) + "\n";
	    playersInCurrentMatch.push(temp_name);
	  }

	  temp_match = [i, temp_round, temp_year, temp_num_ratings, temp_rating];
	  matchesChunk += (temp_match.join(", ")) + "\n";
  }
  fs.appendFileSync('playersM.csv', playersChunk);
	fs.appendFileSync('matchesM.csv', matchesChunk);
}

//PELES
for(let counter = 19; counter < 20; counter++){
	let playersChunk = ``;
	let matchesChunk = ``;

	for (let i = 475001 ; i <= 500000; i++) {

	  playersInCurrentMatch = []; //Reset players per match
	  temp_round = possible_rounds[getRandomIntInclusive(0, 4)];
	  temp_year = getRandomIntInclusive(1990, 2018);
	  temp_num_ratings = getRandomIntInclusive(10000, 100000);
	  temp_rating = Math.floor(Math.random() * 60) / 10 + 4;
	  
	  for (let j = 1; j < 23; j++) {
	    //Generating a unique name per match
	    while (true) {
	    	temp_name = possible_names[getRandomIntInclusive(0, 99)];
	    	if (!playersInCurrentMatch.includes(temp_name)) {
	    		break;
	    	}
	    }
	    if(j === 1){
	    	temp_name = 'pele';
	    }
	    temp_player = [i, temp_name, temp_year, j];
	    playersChunk += (temp_player.join(", ")) + "\n";
	    playersInCurrentMatch.push(temp_name);
	  }

	  temp_match = [i, temp_round, temp_year, temp_num_ratings, temp_rating];
	  matchesChunk += (temp_match.join(", ")) + "\n";
  }
  fs.appendFileSync('playersM.csv', playersChunk);
	fs.appendFileSync('matchesM.csv', matchesChunk);
}
