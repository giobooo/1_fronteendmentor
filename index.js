function appendNewChallange(name, link, screen, date) {
  let container = document.createElement("div");
  container.classList.add("card");

  let aLinkContainer = document.createElement("a");
  aLinkContainer.href = link;
  aLinkContainer.title = name;

  let challengeImage = document.createElement("img");
  challengeImage.classList.add("screen");
  challengeImage.src = screen;
  challengeImage.alt = name + " screenshot";

  let challengeTitle = document.createElement("h3");
  challengeTitle.innerHTML = name;

  let challengeDate = document.createElement("span");
  challengeDate.innerHTML = date;

  container.appendChild(aLinkContainer);
  container.appendChild(challengeDate);
  aLinkContainer.appendChild(challengeImage);
  aLinkContainer.appendChild(challengeTitle);

  document.querySelector(".cards-container").appendChild(container);
}

async function readAppendAllChallenges() {
  const list = await fetch("./challenges_list.json")
    .then((response) => response.json())
    .then((json) => {
      return json;
    });

  list.challenges.forEach((item) => {
    appendNewChallange(item.name, item.href, item.screenshot, item.date);
  });
}

readAppendAllChallenges();
