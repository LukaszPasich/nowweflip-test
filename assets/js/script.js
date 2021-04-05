window.onload = function() {


    // ----------------- Shuffle Cards -----------------

    /* =======================================================================================================
         
                                                CREDIT CODE
    The array containing cards concept taken from this youtube tutorial: https://www.youtube.com/watch?v=tjyDOHzKN0w

    ======================================================================================================== */

const cardArray = [
    // green cards
    {
        colour: 'green',
        name: 'rock',
        img: 'assets/images/card-green-rock.png'
    },
    {
        colour: 'green',
        name: 'rock',
        img: 'assets/images/card-green-rock.png'
    },
    {
        colour: 'green',
        name: 'rock',
        img: 'assets/images/card-green-rock.png'
    },

    {
        colour: 'green',
        name: 'paper',
        img: 'assets/images/card-green-paper.png'
    },
    {
        colour: 'green',
        name: 'paper',
        img: 'assets/images/card-green-paper.png'
    },
    {
        colour: 'green',
        name: 'paper',
        img: 'assets/images/card-green-paper.png'
    },

    {
        colour: 'green',
        name: 'scissors',
        img: 'assets/images/card-green-scissors.png'
    },
     {
        colour: 'green',
        name: 'scissors',
        img: 'assets/images/card-green-scissors.png'
    },
     {
        colour: 'green',
        name: 'scissors',
        img: 'assets/images/card-green-scissors.png'
    },

     {
        colour: 'green',
        name: 'x',
        img: 'assets/images/card-green-x.png'
    },

    // red cards
    {
        colour: 'red',
        name: 'rock',
        img: 'assets/images/card-red-rock.png'
    },
    {
        colour: 'red',
        name: 'rock',
        img: 'assets/images/card-red-rock.png'
    },
    {
        colour: 'red',
        name: 'rock',
        img: 'assets/images/card-red-rock.png'
    },

    {
        colour: 'red',
        name: 'paper',
        img: 'assets/images/card-red-paper.png'
    },
    {
        colour: 'red',
        name: 'paper',
        img: 'assets/images/card-red-paper.png'
    },
    {
        colour: 'red',
        name: 'paper',
        img: 'assets/images/card-red-paper.png'
    },

    {
        colour: 'red',
        name: 'scissors',
        img: 'assets/images/card-red-scissors.png'
    },
     {
        colour: 'red',
        name: 'scissors',
        img: 'assets/images/card-red-scissors.png'
    },
     {
        colour: 'red',
        name: 'scissors',
        img: 'assets/images/card-red-scissors.png'
    },

     {
        colour: 'red',
        name: 'x',
        img: 'assets/images/card-red-x.png'
    },
];

    // ----------------- Shuffle Cards -----------------

    /* =======================================================================================================
         
                                                CREDIT CODE
        Shuffle Cards taken from youtube tutorial: https://www.youtube.com/watch?v=tjyDOHzKN0w

    ======================================================================================================== */

    cardArray.sort(() => 0.5 - Math.random());

    // ----------------- Variables -----------------

const grid = document.querySelector('.grid');
const result = document.getElementById('result');
const lostCards = document.querySelectorAll("div.player-panel-background > div");

// record selected cards
let cardsSelectedName =[];
let cardsSelectedColour = [];
let cardsSelectedId = [];

// split recorded card values to individual card values
let firstCardColour;
let firstCardName;
let firstCardId;

let secondCardColour;
let secondCardName;
let secondCardId;

// store lost cards for winning condition
let lostGreenRock = 0;
let lostRedRock = 0;
let lostGreenPaper = 0;
let lostRedPaper = 0;
let lostGreenScissors = 0;
let lostRedScissors = 0;

// store & display points
let points = 0;
let pointsDisplayed = points.toString();
result.textContent = pointsDisplayed;


    // ----------------- Display Cards (...and plug event listeners) -----------------

    /* =======================================================================================================
         
                                                CREDIT CODE
        Most of Shuffle Cards code found in youtube tutorial: https://www.youtube.com/watch?v=tjyDOHzKN0w

    ======================================================================================================== */

function displayCards() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'assets/images/card-back.png');
        card.setAttribute('alt', 'Back of the card');  // I've added this line to pass the Accesibility Test
        card.setAttribute('data-id', i);
        card.classList.add('js-card');  // I've added this line to style the cards
        card.addEventListener('click', selectCard);
        grid.appendChild(card);
    }
}


    // ----------------- Display Points -----------------

function displayPoints() {
    pointsDisplayed = points.toString();
    result.textContent = pointsDisplayed;
}


    // ----------------- Select Cards -----------------

    /* =======================================================================================================
         
                                                CREDIT CODE
        Select Cards majority of the code taken from youtube tutorial: https://www.youtube.com/watch?v=tjyDOHzKN0w

    ======================================================================================================== */

function selectCard() {
    const cardId = this.getAttribute('data-id');
    cardsSelectedName.push(cardArray[cardId].name);
    cardsSelectedColour.push(cardArray[cardId].colour);
    cardsSelectedId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
        while (cardsSelectedId[0] === cardsSelectedId[1]) {   // BUG FIX: fixes bug related to double clicking on the same card
            cardsSelectedId.shift();            // cancel the index of the second (same) card recorded in CardsSelectedId array
            cardsSelectedColour.shift();        // cancel the colour of the second (same) card recorded in CardsSelectedColour array
            cardsSelectedName.shift();          // cancel the name of the second (same) card recorded in CardsSelectedName array
        }
        if (cardsSelectedName.length === 2) {
        document.getElementById('freeze-flip').style.visibility='visible';  // BUG FIX: applies invisible div on screen to prevent 3rd card flipped for 1750ms
        setTimeout(compareCards, 1750);
        }
}


// ----------------- Compare Cards -----------------

function compareCards() {
    document.getElementById('freeze-flip').style.visibility='hidden';
    const cards = document.querySelectorAll("div.grid > img");

    for (let i = 0; i < cardsSelectedName.length; i++) {
        firstCardName = cardsSelectedName[0];
        secondCardName = cardsSelectedName[1];
    }

    for (let i = 0; i < cardsSelectedColour.length; i++) {
        firstCardColour = cardsSelectedColour[0];
        secondCardColour = cardsSelectedColour[1];
    }

    for (let i = 0; i < cardsSelectedId.length; i++) {
        firstCardId = cardsSelectedId[0];
        secondCardId = cardsSelectedId[1];
    }

    // comparing cards - draw
    if (firstCardColour[0] === secondCardColour[0] ||
        firstCardName[0] === secondCardName[0] ||
        firstCardName[0] === 'x' ||
        secondCardName[0] === 'x') {
            cards[firstCardId].setAttribute('src', 'assets/images/card-back.png');
            cards[secondCardId].setAttribute('src', 'assets/images/card-back.png');
            points--;
            displayPoints();

    // comparing cards - paper beats rock
    } else if (firstCardName === 'rock' && secondCardName === 'paper' ||
        firstCardName === 'paper' && secondCardName === 'rock') {
            if (firstCardName === 'paper') {
                cards[firstCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[secondCardId].setAttribute('src', 'assets/images/card-empty.png');
                cards[secondCardId].removeEventListener('click', selectCard);
                storeLostRock(firstCardColour);
            } else {
                cards[secondCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[firstCardId].setAttribute('src', 'assets/images/card-empty.png');
                cards[firstCardId].removeEventListener('click', selectCard);
                storeLostRock(secondCardColour); 
            }

    // comparing cards - rock beats scissors    
    } else if (firstCardName === 'rock' && secondCardName === 'scissors' ||
        firstCardName === 'scissors' && secondCardName === 'rock') {
            if (firstCardName === 'rock') {
                cards[firstCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[secondCardId].setAttribute('src', 'assets/images/card-empty.png');
                cards[secondCardId].removeEventListener('click', selectCard);
                storeLostScissors(firstCardColour);
            } else {
                cards[secondCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[firstCardId].setAttribute('src', 'assets/images/card-empty.png');
                cards[firstCardId].removeEventListener('click', selectCard);
                storeLostScissors(secondCardColour);
            }
    // comparing cards - scissors beat paper
    } else if (firstCardName === 'scissors' && secondCardName === 'paper' ||
        firstCardName === 'paper' && secondCardName === 'scissors') {
        if (firstCardName === 'scissors') {
                cards[firstCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[secondCardId].setAttribute('src', 'assets/images/card-empty.png');
                cards[secondCardId].removeEventListener('click', selectCard);
                storeLostPaper(firstCardColour);
            } else {
                cards[secondCardId].setAttribute('src', 'assets/images/card-back.png');
                cards[firstCardId].setAttribute('src', 'assets/images/card-empty.png');
                cards[firstCardId].removeEventListener('click', selectCard);
                storeLostPaper(secondCardColour);
            }
    }
    cardsSelectedName =[];
    cardsSelectedColour = [];
    cardsSelectedId = [];
}


// ----------------- Count & Display Lost Cards -----------------

function storeLostRock(rock) {
    if (rock === 'green') {
        lostRedRock++;  // add lost card
        lostCards[8 + lostRedRock].classList.add('transparent');  // fade out red rock icon
        points += 3;
        displayPoints();
    } else {
        lostGreenRock++; // add lost card
        lostCards[lostGreenRock - 1].classList.add('transparent');  // fade out green rock icon
        points -= 2;
        displayPoints();
    }
    checkForWin();
}

function storeLostScissors(scissors) {
    if (scissors === 'green') {
        lostRedScissors++;  // add lost card
        lostCards[14 + lostRedScissors].classList.add('transparent');  // fade out red scissors icon
        points += 3;
        displayPoints();
    } else {
        lostGreenScissors++;  // add lost card
        lostCards[5 + lostGreenScissors].classList.add('transparent');  // fade out green scissors icon
        points -= 2;
        displayPoints();
    }
    checkForWin();
}

function storeLostPaper(paper) {
    if (paper === 'green') {
        lostRedPaper++;  // add lost card
        lostCards[11 + lostRedPaper].classList.add('transparent');  // fade out red paper icon
        points += 3;
        displayPoints();
    } else {
        lostGreenPaper++ ;  // add lost card
        lostCards[2 + lostGreenPaper].classList.add('transparent');  // fade out green paper icon
        points -= 2;
        displayPoints();
    }
    checkForWin();
}


// ----------------- Check for Winning Condition -----------------

function checkForWin() {
    if (lostRedRock + lostRedPaper === 6 || 
        lostRedRock + lostRedScissors === 6 ||
        lostRedPaper + lostRedScissors === 6) {
        document.getElementById('win-message').style.visibility='visible';
        document.getElementById('points-win').innerHTML = pointsDisplayed;
    } else if
        (lostGreenRock + lostGreenPaper === 6 ||
        lostGreenRock + lostGreenScissors === 6 ||
        lostGreenPaper + lostGreenScissors === 6) {
        document.getElementById('lose-message').style.visibility='visible';
        document.getElementById('points-lose').innerHTML = pointsDisplayed;
        }
}

displayCards();

};