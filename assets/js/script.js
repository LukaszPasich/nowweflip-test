console.log("hello js");

// 1. Start the Game //

// 2. Shuffle Cards On-Load & On-Play Again //

// 3. Plug Event Listeners //
function cardSelected() {
    console.log('card clicked');
}

let cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardSelected);
}


// 4. Select 2 Cards //

// 5. Compare 2 Cards //

// 6a. Display Neutral Pair Outcome > Switch Active Player //

/* 6b. Display Matching Pair Outcome
   scenario A - Green Rock v Red Paper
   scenario B - Green Rock v Red Scissors
   scenario C - Green Paper v Red Rock
   scenario D - Green Paper v Red Scissors
   scenario E - Green Scissors v Red Rock
   scenario F - Green Scissors v Red Paper
*/

// 7. Check Winning Condition //

// 8a. Winning Message //

// 8b. Mark Game Status > Switch Active Player //

