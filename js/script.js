let boxArray = [
  {
    name: "CSS",
    img: "https://e7.pngegg.com/pngimages/239/228/png-clipart-html-css3-cascading-style-sheets-logo-markup-language-digital-agency-miscellaneous-blue.png",
  },

  {
    name: "HTML",
    img: "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
  },

  {
    name: "Javascript",
    img: "https://e7.pngegg.com/pngimages/503/848/png-clipart-javascript-computer-icons-software-developer-cascading-style-sheets-javascript-logo-angle-text.png",
  },

  {
    name: "jQuery",
    img: "https://w7.pngwing.com/pngs/720/46/png-transparent-jquery-plain-wordmark-logo-icon-thumbnail.png",
  },

  {
    name: "Python",
    img: "https://w7.pngwing.com/pngs/234/329/png-transparent-python-logo.png",
  },

  {
    name: "Node",
    img: "https://w7.pngwing.com/pngs/307/421/png-transparent-node-js-javascript-web-server-scalable-graphics-chrome-v8-vue-js-angle-text-logo.png",
  },
];

let parentDiv = document.querySelector("#card-box");

const gameBox = boxArray.concat(boxArray);
let shuffle = Array.from(gameBox).sort(() => 0.5 - Math.random());

let count = 0;
let firstCard = "";
let secondCard = "";

const matchCard = () => {
  let matchDivCard = document.querySelectorAll(".card_select");
  matchDivCard.forEach((element) => {
    element.classList.add("matchCard");
  });
};

const resetGame = () =>{
     count = 0;
     firstCard = "";
     secondCard = "";

    let matchDivCard = document.querySelectorAll(".card_select");
    matchDivCard.forEach((element) => {
    element.classList.remove("card_select");
    });
}

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

        setTimeout(()=>{
            matchCard();
            resetGame();
        },1000)
        
      }
      else{
        setTimeout(()=>{
            resetGame();
        },1000)
        
      }
    }
  }
 
});

for (let i = 0; i < shuffle.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffle[i].name;
  

  const forntDiv = document.createElement('div');
  forntDiv.classList.add('front-div');

  const backDiv = document.createElement('div');
  backDiv.classList.add('back-div');
  backDiv.style.backgroundImage = `url(${shuffle[i].img})`;

  parentDiv.appendChild(childDiv);

  childDiv.appendChild(forntDiv);
  childDiv.appendChild(backDiv);
 
}
