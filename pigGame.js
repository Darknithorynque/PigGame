let random_dice;
const dicesArray = [];
let current_dice = "dice-one";
let img_box = document.getElementById("img_box");

//Default opacity for player 2
const playerTwoDefault = document.getElementsByClassName("players")[1];
playerTwoDefault.classList.add("disactive");
console.log(playerTwoDefault.className);
//playerTwo.classList.remove("disactive");

//Roll Dice
img_box.src = "Images/" + current_dice + ".webp";

const RandomToStr = function (random) {
  if (random == 1) current_dice = "dice-one";
  if (random == 2) current_dice = "dice-two";
  if (random == 3) current_dice = "dice-three";
  if (random == 4) current_dice = "dice-four";
  if (random == 5) current_dice = "dice-five";
  if (random == 6) current_dice = "dice-six";
};

const CurrentScore = function (random = []) {
  const playerOne = document.querySelector("#player-one");
  const playerTwo = document.querySelector("#player-two");
  let total = 0;
  const upperValueOne = Number(
    document.getElementsByClassName("playerScore")[0].textContent
  );
  const upperValueTwo = Number(
    document.getElementsByClassName("playerScore")[1].textContent
  );
  console.log(upperValueOne, upperValueTwo);

  console.log(random);

  random?.forEach((item) => {
    total = total + item;
  });
  if (!playerOne.classList.contains("disactive")) {
    document.querySelector("#currentScorePlayerOne").textContent =
      total - upperValueTwo;
  }
  if (!playerTwo.classList.contains("disactive")) {
    document.querySelector("#currentScorePlayerTwo").textContent =
      total - upperValueOne;
  }

  console.log(Number(total));
};

document
  .getElementsByClassName("rollDice")[0]
  .addEventListener("click", function () {
    random_dice = (Math.random() * 5 + 1).toFixed(0);
    const actualRandomDice = Number(random_dice);

    RandomToStr(random_dice);
    dicesArray.push(actualRandomDice);
    CurrentScore(dicesArray);
    img_box.src = "Images/" + current_dice + ".webp";
  });

//Hold

const UpScore = function () {
  const playerOne = document.getElementById("player-one");
  const playerTwo = document.getElementById("player-two");

  const currentScoreOne = document.querySelector(
    "#currentScorePlayerOne"
  ).textContent;
  const currentScoreTwo = document.querySelector(
    "#currentScorePlayerTwo"
  ).textContent;

  if (!playerOne.classList.contains("disactive")) {
    const upScoreOne = document.querySelector("#upScoreOne");
    upScoreOne.textContent = currentScoreOne;

    playerOne.classList.add("disactive");
    playerTwo.classList.remove("disactive");

    console.log(playerOne.className);
    console.log(playerTwo.className);
    console.log(playerOne);
    console.log(playerTwo);
  } else if (!playerTwo.classList.contains("disactive")) {
    const upScoreTwo = document.querySelector("#upScoreTwo");

    upScoreTwo.textContent = currentScoreTwo;
    playerTwo.classList.add("disactive");
    playerOne.classList.remove("disactive");
  }
};
document
  .getElementsByClassName("hold")[0]
  .addEventListener("click", function () {
    UpScore();
  });

//New Game
document
  .getElementsByClassName("newGame")[0]
  .addEventListener("click", function () {
    location.reload();
  });
