# M2-Memory-Card-Game
Milestone Project 2: Interactive Frontend Development Milestone Project - Code Institute
# Matching Pups - A playful memory card game - PLEASE SCROLL DOWN TO ''HOW TO PLAY'' BEFORE TRYING OUT THE GAME

This is my second project to present to Code Institute. The project highlights a playful memory card game with a variety of cartoon puppies. During the process of working on this second project, I have begun creating multiple ideas, such as another website, quite alike the first project, a meditation app that did not at all turn out to be like I have envisioned it and lastly, I attempted creating a website together with the app, which was simply a mess. Suddenly, sitting at home and creating, working on the project was no longer fun. At that point, I knew I wanted to create something that would instead put a smile on mine, and hopefully other's faces as well. As an avid dog lover, I thought of the ways to implement my playful and less serious side together with an idea.

With that being said, I wanted to, at the same time-work on a project that would challenge me enough in terms of JavaScript, but not be a complete dread to make. 

This project is based solely on my imagination and desire to have fun while learning! My inspiration was my own dog and all the childhood memories which I am very fond of. The last thing I wanted to do after a long and exhausting day at work was to work on a boring project and instead, I wanted to have coding as my resort, and the project as something to look forward too. Creating this game has also made me thing of how fun it would have been if I had access to it as a young child. Also, it is pretty relaxing to sit down and play a round after a day at the office.

## HOW TO PLAY
How to play is included in the readme file and not in the browser because I did not want to ruin the appearance. I am aware that a regular user/player won't have access to a readme file, but I did also think that a memory card game is a pretty self-explanatory product. 

1. Refresh the browser
2. Click on ''Click to start''
3. You have 100 seconds (pretty generous, right?!) and the unlimited amout of flips per round. However, ideally you want to achieve as many matches, for as few as possible flips, per a 100 seconds. Each time you click on a card, even if it was already flipped, counts as your go - an additional flip. The doubble-clicked card will then flip back. So, don't waste your flip count!
4. You can flip cards too quickly/agressively, but this action will not result in a match. 
5. Upon completing the round, PLEASE REFRESH THE BROWSER to play again, this is how both the timer and the number of flips reset to 100 seconds and 0, respectively.

## Demo
A live Demo of the website can be found here https://katsiez.github.io/Memory-card-game/index.html 

## UX
My goal in the design was to be silly and playful. I take myself seriously way too often and it was starting to take a toll on my mental health as well as show on the project. The design is quite early 2000's, together with the choice of fonts, colours and the background, I did want this project to generate positivity and even be a bit childlish. I used a colour picker in order to compliment the colours as much as visually possible however, I left some room for a kitschy and dramatic, high-contrast appearance. 

-As a user type, I wanted to provide for a playful, easy to play and silly little memory card game. Both parents and the kids are more than welcome to play a round! To avoid poor UX, I decided to keep the game a simple one-page experience. The rules are simple; get a pair of matching pups and you're on your way towards a victory!

-Each and every single card flip counts, there is both a Timer on the upper left corner above the card deck (set to 100s) and a Flip score, in the right hand corner. 

-The game is carried out with background music, each time the user flips a card the game generates a card flipping sound, as well as a dog bark sound when a pair is matched. 100 seconds seems like a long time to complete the game, but I have included quite a few pairs, some of which resemble each other on purpose, so that the game becomes more complicated.

-A victory calls for an encouraging tune at the end of the game, while a game over generates another tune, the same one being generated when the timer hits 0.

### Wireframes:

1. https://github.com/Katsiez/Memory-card-game/tree/memory/assets/wireframes 

The game is a one-page app, easy to follow with fool-proof rules. It was my goal to create this memory card game to be so simple, that even a young child could follow it. There is no much fuss about it.

### Features Left to Implement

-When the timer hits down to 10 seconds, I would like to change colour and be manipulated in JS so that it plays a dramatic tune.
-I would like to include ''intruders'' or animals that are not dogs/puppies. I tried doing this with svgs of a llama and hedgehog but I am not yet familiar with how to manipulate JS to generate a Game Over reaction when those particular cards are being matched. I tried assigning those images a different class in html and css, but it was not as successful as I had hoped. 
-Make the app a bit more responsive, maybe show 4, instead of 2 cards in a row. I am however, weary of the fact that the cards would become too tiny to be played without accidentally clicking on the neighbouring ones.
-Create a pop-up message explaining the game rules, although the game is quite simple.
-Should I ever wish to achieve an even more dramatic effect, I could include a ''wrong'' sound each time 2 non-matching cards are flipped. 

## Technologies used:
1. HTML
2. CSS
3. JS
4. Jasmine testing

## Testing
The memory card game app is responsive on desktop and multiple devices and in multiple browsers (it looks awesome in the both iPad&iPad Pro view, which my previous project has not managed to achieve!). Aside from the Jasmine scripts loaded in the html file and commented out, to be used in the browser, please refer to test cases below:

|   Test Cases  |     Steps      |    Status   |
|---------------|:--------------:|------------:|

|1.User should be able to start game |1.Click on ''Click to Start'' text/button |1.Passed |

|2.Clicking on ''Click to Start'' text/button hides overlay |2. As 1   |2.Passed |

|3.Clicking on ''Click to Start'' text/button plays background music |3. As 1 and 2 |3.Passed |

|4.Hovering over cards transform: translateY(0); paw image |4. Mouseover cards |4.Passed |

|5.Cards face back if not a match |5. Clicking on a pair of cards, if not a match they flip back automatically |5.Passed |

|6.Dog woof pplayed if cards a match |6. Clicking on a pair of cards, if a match woof sound plays |6.Passed |

|7.If cards match, @keyframes dance(css,124) occurs |7. Clicking on a pair of cards, if a match dance occurs |7.Passed |

|8.If ALL cards match, victory tune plays and the ''Victory'' text overlays|8. Finding all matches by click |8.Passed |

|9.If NOT ALL cards match, game over tune plays and the ''Game Over'' text overlays|9. NOT finding all matches by click |9.Passed |

|10.Clicking on the ''Victory'' or "Game Over" text restarts game, cards flip|10.As left|10.Failed, must refresh page, code there, not responding|



## Deployment
This site is hosted using GitHub pages, deployed directly from the memory branch. The deployed site will update automatically upon new commits to the memory branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`. I will merge the two branches when the project is fully finished.

To run locally, you can clone this repository directly into the editor of your choice by pasting "" into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## Credits

### Content
A simple Google search would reveal literally thousands of memory card game projects however, this particular idea to make it so it matches cute puppies, was entirely my own. I refered to this website: (Scotch tutorials) [https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-2-matching-cards for the Fisher-Yates shuffle algorithm] (which was quite difficult to grasp and implement), and I have as well read the material on here: (Free Code Camp) [https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/] when trying to figure out the logistics behind the JS for a project like this. Hoever, these provided an overall idea, while I decided on implementing completely different effects. Other than that, I decided to manipulate most effects via CSS, just because it is much more effective and fun to implement. The main inspiration was my own dog. 

### Media
All photos were taken from [Pexels](https://www.pexels.com/) and the 2 cursors were taken from (Real World Graphics) [http://www.rw-designer.com/], SVGs were retrived from (Flaticon) [https://www.flaticon.com/home]

### Acknowledgements
The Fisher-Yates algorithm was, after some severe Googling refered to from Scotch tutorials.
The media queries were found in Code Institute videos and here:https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/ 
The app is inspired by milions of memory card games I have seen in my life, both manual and computerized. 
For the SVG rotations, [https://css-tricks.com/] was my best friend. 
**This is strictly for educational purpose, the virtual furniture store does not by any means exist in reality..** 
