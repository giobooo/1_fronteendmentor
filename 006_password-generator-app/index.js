const UPString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LCString = "abcdefghijklmnopqrstuvwxyz";
const SymString = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const NumString = "0123456789";
let randomString = "";

function clickGenerate() {
  generateNewPassword();
}

function updateLength() {
  //updates the label with the string length
  document.querySelector(".length-value").innerHTML =
    document.getElementById("length-selector").value;
}

function generateNewPassword() {
  //gets the user preference on button click
  const pswLength = document.getElementById("length-selector").value;
  const UC = document.getElementById("incl-UC").checked;
  const LC = document.getElementById("incl-LC").checked;
  const NUM = document.getElementById("incl-NUM").checked;
  const SYM = document.getElementById("incl-SYM").checked;

  // Generates the string with all the possible charactes based on user preference
  let totalString = "";
  if (UC) {
    totalString = totalString + UPString;
  }
  if (LC) {
    totalString = totalString + LCString;
  }
  if (NUM) {
    totalString = totalString + NumString;
  }
  if (SYM) {
    totalString = totalString + SymString;
  }

  const totalStringShuffled = ShuffleString(totalString);

  // A for loop that each time gets a random letter from the total string
  // and adds it to the randomString variable that will be the generated password
  randomString = "";
  for (let index = 0; index < pswLength; index++) {
    randomString =
      randomString +
      totalStringShuffled.charAt(getRandomInt(totalStringShuffled.length));
  }

  document.querySelector(".generated-password").value = randomString;
  updatePwdRatingDOM(updateScore());
}

function updateScore() {
  const pswLength = document.getElementById("length-selector").value;
  const UC = document.getElementById("incl-UC").checked;
  const LC = document.getElementById("incl-LC").checked;
  const NUM = document.getElementById("incl-NUM").checked;
  const SYM = document.getElementById("incl-SYM").checked;

  let score = 0;

  if (pswLength < 8) {
    score = 1;
  }
  if (pswLength >= 8) {
    if (UC) {
      score++;
    }
    if (LC) {
      score++;
    }
    if (NUM) {
      score++;
    }
    if (SYM) {
      score++;
    }
    if (score > 4) {
      score = 4;
    }
  }

  return score;
}

function updatePwdRatingDOM(score) {
  const items = document.querySelectorAll(".rating");
  console.log(score);

  items.forEach((element) => {
    element.classList.remove("rating-x-low");
    element.classList.remove("rating-full");
    element.classList.remove("rating-empty");
    element.classList.remove("rating-medium");
    element.classList.remove("rating-low");
  });

  if (score === 0) {
    items.forEach((element) => {
      element.classList.add("rating-empty");
    });
  }

  if (score === 1) {
    for (let index = 0; index < 1; index++) {
      items.item(index).classList.add("rating-x-low");
    }
    document.querySelector(".rating-container span").innerHTML = "TOO WEAK!";
  } else if (score === 2) {
    for (let index = 0; index < 2; index++) {
      items.item(index).classList.add("rating-low");
    }
    document.querySelector(".rating-container span").innerHTML = "WEAK";
  } else if (score === 3) {
    for (let index = 0; index < 3; index++) {
      items.item(index).classList.add("rating-medium");
    }
    document.querySelector(".rating-container span").innerHTML = "MEDIUM";
  } else if (score === 4) {
    for (let index = 0; index < 4; index++) {
      items.item(index).classList.add("rating-full");
    }
    document.querySelector(".rating-container span").innerHTML = "STRONG";
  }
}

//fishes-yates shuffle to shuffle the string
function ShuffleString(stringToShuffle) {
  var a = stringToShuffle.split("");
  var n = a.length;
  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

// gets a random number with a max value
function getRandomInt(max) {
  min = Math.ceil(0);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function copyToClipboard() {
  if (randomString !== "") {
    await navigator.clipboard.writeText(randomString).then(
      () => {
        document.querySelector(".copied-message").classList.remove("hidden");
        setTimeout(() => {
          document.querySelector(".copied-message").classList.add("hidden");
        }, 3000);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
