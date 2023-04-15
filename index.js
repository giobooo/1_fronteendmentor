function appendNewChallange(name, link, screen, date, external) {
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
  challengeDate.innerHTML = "Completed on: " + date;

  let challengeLink = document.createElement("a");
  challengeLink.classList.add("challenge-link");
  challengeLink.innerHTML = "View original challenge";
  challengeLink.href = external;
  challengeLink.target = "_blank";
  challengeLink.rel = "noopener";

  let ftmImage = document.createElement("img");
  ftmImage.src = "./ftmIcon.png";
  ftmImage.alt = "Frontend Mentor Logo";

  challengeLink.appendChild(ftmImage);

  container.appendChild(aLinkContainer);
  container.appendChild(challengeDate);
  container.appendChild(challengeLink);
  aLinkContainer.appendChild(challengeImage);
  aLinkContainer.appendChild(challengeTitle);

  document.querySelector(".cards-container").appendChild(container);
}

async function readAppendAllChallenges() {
  const list = await fetch("./challenges_list.json")
    .then((response) => response.json())
    .then((json) => {
      return json.challenges;
    });

  list.reverse().forEach((item) => {
    appendNewChallange(
      item.name,
      item.href,
      item.screenshot,
      item.date,
      item.external
    );
  });
}

readAppendAllChallenges();
