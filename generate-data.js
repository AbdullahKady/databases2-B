let fs = require('fs');

const writeCSV = (fileName, array) => {
  var file = fs.createWriteStream(fileName);
  file.on('error', (err) => console.log(err));
  array.forEach((line) => {
    file.write(line.join(', ') + '\n');
  }
  );
  file.end();
}
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


///////////////////////////////////////////// Cup records initializations:
let cup_records = []; //Final result set
const possible_rounds = ['32nd', '16th', 'quarter_final', 'SemiFinal', 'Final'];
let temp_match,
  temp_round,
  temp_year,
  temp_num_ratings,
  temp_rating;

///////////////////////////////////////////// Players records initializations:
let players_records = [];
//100 random names (Unique)
const possible_names = [
  'Demarcus Rudnick',
  'Carmine Kumm',
  'Nathanael Westberry',
  'Jayson Quattlebaum',
  'Lane Barbagallo',
  'Freddy Erick',
  'Ernest Leroux',
  'Scottie Holdren',
  'Charley Mclennan',
  'Shawn Waltz',
  'Grady Mccurry',
  'Warren Berkley',
  'Toby Rodrigues',
  'Hiram Gehring',
  'Dusty Bungard',
  'Mervin Trunnell',
  'Richard Alvino',
  'Alex Easton',
  'Jeffry Kamrowski',
  'Edward Thatcher',
  'Irwin Brockett',
  'Franklyn Willson',
  'Ward Argento',
  'Amado Eifert',
  'Bart Mcneeley',
  'Winston Farmer',
  'Dale Hein',
  'Stanford Ellenwood',
  'Kris Conerly',
  'Wyatt Melendy',
  'Gavin Clapper',
  'Austin Crusoe',
  'Johnathan Threet',
  'Jewell Schoenrock',
  'Al Janke',
  'Rodger Jarret',
  'Sandy Luciano',
  'Joaquin Schon',
  'Gregory Pasternak',
  'Wm Moxley',
  'Lesley Culbert',
  'Warner Coley',
  'Odell Balducci',
  'Deon Benbow',
  'Dewayne Lockhart',
  'Wilfred Janousek',
  'Dudley Juliano',
  'Clint Albro',
  'Octavio Bakke',
  'Wallace Rigo',
  'Brant Romans',
  'Johnnie Spevak',
  'Martin Crimmins',
  'Cory Blau',
  'Carrol Patz',
  'Damien Rivard',
  'Freddy Vassar',
  'Denis Oberg',
  'Willard Lapointe',
  'Willian Gaulding',
  'Francesco Perryman',
  'Aubrey Wickline',
  'Glen Broadwell',
  'Douglass Hammersley',
  'Hershel Rubino',
  'Otha Winger',
  'Troy Pillai',
  'Dominique Cedeno',
  'Arlie Dole',
  'Sheldon Tedeschi',
  'Malcom Labrador',
  'Jarrett Canter',
  'Donn Luque',
  'Thomas Dowdy',
  'Adolph Provence',
  'Reyes Singley',
  'Bret Goddard',
  'Eusebio Rowe',
  'Gilbert Pellegrini',
  'Bud Dunham',
  'Coleman Ried',
  'Antony Funchess',
  'Kareem Bliss',
  'Sung Siu',
  'Trenton Kumar',
  'Edmond Blow',
  'Benedict Taliaferro',
  'Maxwell Giuffre',
  'Refugio Crose',
  'Clinton Burdge',
  'Kenny Hoerr',
  'Ernie Frailey',
  'Ivory Gorden',
  'Darin Pimentel',
  'Devon Kinslow',
  'Columbus Ganz',
  'Osvaldo Dasilva',
  'Isaac Judson',
  'Jeromy Conroy',
  'Israel Guadalupe',
];

let temp_player,
  temp_name,
  playersInCurrentMatch; //To ensure primary key (no 2 players with the same name in a match)

for (let i = 1; i < 2681; i++) {
  playersInCurrentMatch = []; //Reset players per match
  temp_round = possible_rounds[getRandomIntInclusive(0, 4)];
  temp_year = getRandomIntInclusive(1990, 2018);
  temp_num_ratings = getRandomIntInclusive(10000, 100000);
  temp_rating = Math.floor((Math.random() * 60)) / 10 + 4;
  for (let j = 1; j < 23; j++) {
    //Generating a unique name per match
    while (true) {
      temp_name = possible_names[getRandomIntInclusive(0, 99)];
      if (!playersInCurrentMatch.includes(temp_name)) {
        break;
      }
    }
    temp_player = [i, temp_name, temp_year, j];
    playersInCurrentMatch.push(temp_name);
    players_records.push(temp_player);
  }
  temp_match = [i, temp_round, temp_year, temp_num_ratings, temp_rating];
  cup_records.push(temp_match);
}

//A bunch of peles ._.
for (let i = 0; i < 118; i++) {
  players_records[(i * 30)][1] = 'pele';
}

writeCSV('matches.csv', cup_records);
writeCSV('players.csv', players_records);
