# M2-Memory-Card-Game
Milestone Project 2: Interactive Frontend Development Milestone Project - Code Institute
# Matching Pups - A playful memory card game - PLEASE SCROLL DOWN TO ''HOW TO PLAY'' BEFORE TRYING OUT THE GAME

This is my second project to present to Code Institute. The project highlights a playful memory card game with a variety of cartoon puppies. During the process of working on this second project, I have begun creating multiple ideas, such as another website, quite alike the first project, a meditation app that did not at all turn out to be like I have envisioned it and lastly, I attempted creating a website together with the app, which was simply a mess. Suddenly, sitting at home and creating, working on the project was no longer fun. At that point, I knew I wanted to create something that would instead put a smile on mine, and hopefully other's faces as well. As an avid dog lover, I thought of the ways to implement my playful and less serious side together with an idea.

With that being said, I wanted to, at the same time-work on a project that would challenge me enough in terms of JavaScript, but not be a complete dread to make. 

This project is based solely on my imagination and desire to have fun while learning! My inspiration was my own dog and all the childhood memories which I am very fond of. The last thing I wanted to do after a long and exhausting day at work was to work on a boring project and instead, I wanted to have coding as my resort, and the project as something to look forward too. Creating this game has also made me thing of how fun it would have been if I had access to it as a young child. Also, it is pretty relaxing to sit down and play a round after a day at the office.

## HOW TO PLAY
1. Refresh the browser
2. Click on ''Click to start''
3. Start matching whilst being mindful of the timer (100 seconds), ideally you want to aim for as few flips as possible during the time frame
4. DO NOT flip cards too quickly/agressively, as this will result in the false match
5. BE PATIENT with the matches, this is a vanialla JS game afterall
6. Upon completing the round, PLEASE REFRESH THE BROWSER to play again, otherwise the timer will start ticking once again

## Demo
A live Demo of the website can be found here https://katsiez.github.io/Memory-card-game/index.html 

## UX
My goal in the design was to be silly and playful, I take myself seriously way too often and it was starting to take a toll on my project as well. The design is quite early 2000's, together with the choice of fonts, colours and the background, I did want this project to generate positivity and even be a bit childlish. I used a colour picker in order to compliment the colours as much as visually possible however, I left some room for a kitschy and dramatic, high-contrast appearance.

-As a user type, I wanted to provide for a playful, easy to play and silly little memory card game. To avoid poor UX, I decided to keep the game a simple one-page experience. The rules are simple; get a pair of matching pups and you're on your way towards a victory!

-Each and every single card flip counts, there is both a Timer on the upper left corner above the card deck (set to 100s) and a Flip score, in the right hand corner. 

-The game is carried out with background music, each time the user flips a card the game generates a card flipping sound, as well as a bark sound when a pair is matched. 100 seconds seems like a long time to complete the game, but I have included quite a few pairs, some of which resemble each other on purpose, so that the game becomes more complicated.

-A victory calls for an encouraging tune at the end of the game, while a loss generates another tune, the same one being generated when the timer hits 0.

-It is important for user to know to be patient with the game. Double clicking on the same card and flipping them too fast creates a false victory. This however, only happens from time to time. It is important to refresh the page after having played a round, so that the cards flip back. 

### Wireframes:

1. https://github.com/Katsiez/Memory-card-game/tree/memory/assets/wireframes 

The game is a one-page app, easy to follow with fool-proof rules. It was my goal to create this memory card game to be so simple, that even a young child could follow it. There is no much fuss about it.

### Features Left to Implement

-When the timer hits down to 10 seconds, I would like to change colour and be manipulated in JS so that it plays a dramatic tune.
-I would like to include ''intruders'' or animals that are not dogs/puppies. I tried doing this with svgs of a llama and hedgehog but I am not yet familiar with how to manipulate JS to generate a Game Over reaction when those particular cards are being matched. I tried assigning those images a different class in html and css, but it was not as successful as I had hoped. 
-Make the app a bit more responsive, maybe show 4, instead of 2 cards in a row. I am however, weary of the fact that the cards would become too tiny to be played without accidentally clicking on the neighbouring ones.
-Create a pop-up message explaining the game rules, although the game is quite simple.

## Technologies used:
1. HTML
2. CSS
3. JS
4. Jasmine testing

## Testing
The memory card game app is responsive on desktop and multiple devices and in multiple browsers.


## Deployment
This site is hosted using GitHub pages, deployed directly from the memory branch. The deployed site will update automatically upon new commits to the memory branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`. I will merge the two branches when the project is fully finished.

To run locally, you can clone this repository directly into the editor of your choice by pasting "" into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## Credits

### Content
A simple Google search would reveal literally thousands of memory card game projects however, this particular idea to make it so it matches cute puppies, was entirely my own. I refered to this website: (Scotch tutorials) [https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-2-matching-cards for the Fisher-Yates shuffle algorithm] (which was quite difficult to grasp and implement), and I have as well read the material on here: (Free Code Camp) [https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/] when trying to figure out the logistics behind the JS for a project like this. Hoever, these provided an overall idea, while I decided on implementing completely different effects. Other than that, I decided to manipulate most effects via CSS, just because it is much more effective and fun to implement. 

### Media
All photos were taken from [Pexels](https://www.pexels.com/) and the 2 cursors were taken from (Real World Graphics) [http://www.rw-designer.com/], SVGs were retrived from (Flaticon) [https://www.flaticon.com/home]

### Acknowledgements
The Fisher-Yates algorithm was, after some severe Googling refered to from Scotch tutorials.
The media queries were found in Code Institute videos and here:https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/ 
The app is inspired by milions of memory card games I have seen in my life, both manual and computerized. 
For the SVG rotations, [https://css-tricks.com/] was my best friend. 
**This is strictly for educational purpose, the virtual furniture store does not by any means exist in reality..** 
