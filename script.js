class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/bgmusic.mp3');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
        this.flipSound = new Audio('assets/audio/flip.wav');
        this.matchSound = new Audio('assets/audio/match.wav');
        this.victorySound = new Audio('assets/audio/victory.wav');
        this.gameOverSound = new Audio('assets/audio/gameover.wav');
        //this.wrongSound = new Audio('assets/audio/wrong.wav');
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    //wrong() {
    // this.wrongSound.play();
    //  }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}
class MatchingPups {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;

        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classlist.remove('visible'); //for some reason a capital L here starts playing background music on mouseover//
            card.classList.remove('matched');
        });
    }
    //////////////////////////////////////////////////////////////////////
    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            if (this.cardToCheck)
                this.checkforCardMatch(card);
            else
                this.cardToCheck = card;

        }
    }
    checkforCardMatch(card) {
        //if (this.getCardType(card) === this.getCardType(this.cardToCheck))
        if (card !== this.cardToCheck && this.getCardType(card) === this.getCardType(this.cardToCheck)) {
            this.cardMatch(card, this.cardToCheck);

        } else
            this.cardMisMatch(card, this.cardToCheck);
        this.cardToCheck = null;
        //this.audioController.wrong();
    }
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        //this.wrongSound.pause();
        this.audioController.match();

        if (this.matchedCards.length === this.cardsArray.length)
            this.victory();
    }
    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
    /////////////////////////////////////////////
    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }
    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }
    gameOver() {
        clearInterval(this.countDown);
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');

    }
    victory() {
        clearInterval(this.countDown);
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');

    }

    //Here I've used quite a few resources; for the shuffle I have used the Fisher-Yates shuffle algorithm, to be found here / https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
    //Math.random() function was found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    //After tedious research, my idea was to take the whole array of cards, and with the help of these two create a random shuffling which would make the game even more interesting.
    //Amongst those resources, I also refered to: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-2-matching-cards 
    shuffleCards() {
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[randomIndex].style.order = i;
            this.cardsArray[i].style.order = randomIndex;

        }
    }

    canFlipCard(cards) {
        return true;
        //return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    //let game = new MatchingPups(10, cards);


    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game = new MatchingPups(100, cards);
            game.startGame();
            let audioController = new AudioController();
            audioController.startMusic();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

