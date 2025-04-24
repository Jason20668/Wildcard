const quoteList = [
    'Scott, what team is Yao Ming on?',
    'The Cubs are a New York team because I say so',
    'The Broncos are from the Bronx',   
    'Theres no k in Nicks stupid',
    'The Knicks are a baseball team right?',
    'Scott, what team is Larry Bird on?',
    'I thought Babe Ruth was Black!',
    'The MLB stand for Major League Basketball not Major League Baseball',
    'I thought Gronk Gronkowski was his real name!',
    'I know Tom Brady, he’s the guy in Top Gun right?',
    'Scott, what team was Shaq on?',
    'Are the Celtics a football team?',
    'The Patriots are from New York right?',
    'Yeah Sportsball!!!'
]

let sportsball = document.getElementById('sportQuote')

var randomNumber = Math.floor(Math.random() * quoteList.length);
document.getElementById('sportQuote').textContent = '“' + quoteList[randomNumber].split(' - ')[0] + '”';