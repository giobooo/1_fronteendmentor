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
  challengeDate.innerHTML = date;

  let challengeLink = document.createElement("a");
  challengeLink.innerHTML = "View original challenge on Frontend Mentor";
  challengeLink.href = external;
  challengeLink.target = "_blank";
  challengeLink.rel = "noopener";

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
