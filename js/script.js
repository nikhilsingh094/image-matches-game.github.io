let boxArray = [
  {
    name: "KING",
    img: "https://w7.pngwing.com/pngs/458/229/png-transparent-king-of-spade-playing-card-king-of-spades-playing-card-suit-jack-queen-miscellaneous-game-king-thumbnail.png",
  },

  {
    name: "QUEEN",
    img: "https://w7.pngwing.com/pngs/398/290/png-transparent-preferans-playing-card-joker-game-suit-playing-cards-game-heroes-hearts-thumbnail.png",
  },

  {
    name: "JOKER",
    img: "https://w7.pngwing.com/pngs/433/896/png-transparent-jack-playing-card-spades-valet-de-pique-card-game-cards-game-text-logo-thumbnail.png",
  },

  {
    name: "ACE-HEART",
    img: "https://w7.pngwing.com/pngs/742/114/png-transparent-playing-card-suit-ace-of-hearts-heart-playing-cards-love-king-text-thumbnail.png",
  },

  {
    name: "ACE-CLUBS",
    img: "https://w7.pngwing.com/pngs/467/401/png-transparent-skat-playing-card-ace-card-game-standard-52-card-deck-suit-text-logo-monochrome-thumbnail.png",
  },

  {
    name: "ACE-SPADE",
    img: "https://w7.pngwing.com/pngs/62/1021/png-transparent-gin-rummy-bicycle-playing-cards-united-states-playing-card-company-card-game-ace-card-game-emblem-king-thumbnail.png",
  },
];

let parentDiv = document.querySelector("#card-box");

const gameBox = boxArray.concat(boxArray);
let shuffle = Array.from(gameBox).sort(() => 0.5 - Math.random());

function timer() {
  var sec = 30;
  var timer = setInterval(function () {
    document.getElementById("display-timer").innerHTML = "00:" + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}
timer();

let count = 0;
let firstCard = "";
let secondCard = "";
let score = 0;

const matchCard = () => {
  let matchDivCard = document.querySelectorAll(".card_select");
  let scoreCard = document.querySelector(".score");
  score++;
  scoreCard.innerHTML = "Score: " + score;

  matchDivCard.forEach((element) => {
    element.classList.add("matchCard");
  });
};

const resetGame = () => {
  count = 0;
  firstCard = "";
  secondCard = "";

  let matchDivCard = document.querySelectorAll(".card_select");
  matchDivCard.forEach((element) => {
    element.classList.remove("card_select");
  });
};

parentDiv.addEventListener("click", (event) => {
  let curDiv = event.target;
  if (curDiv.id === "card-box") {
    return false;
  }
  count++;
  if (count < 3) {
    if (count === 1) {
      firstCard = curDiv.parentNode.dataset.name;
      curDiv.parentNode.classList.add("card_select");
    } else {
      secondCard = curDiv.parentNode.dataset.name;
      curDiv.parentNode.classList.add("card_select");
    }

    if (firstCard !== "" && secondCard !== "") {
      if (firstCard === secondCard) {
        setTimeout(() => {
          matchCard();
          resetGame();
        }, 1000);
      } else {
        setTimeout(() => {
          resetGame();
        }, 1000);
      }
    }
  }
});

for (let i = 0; i < shuffle.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffle[i].name;

  const forntDiv = document.createElement("div");
  forntDiv.classList.add("front-div");

  const backDiv = document.createElement("div");
  backDiv.classList.add("back-div");
  backDiv.style.backgroundImage = `url(${shuffle[i].img})`;

  parentDiv.appendChild(childDiv);

  childDiv.appendChild(forntDiv);
  childDiv.appendChild(backDiv);
}
