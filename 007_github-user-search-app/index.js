import { getUserInfo, searchUser } from "./scripts/github.js";

//Change dark to light theme

let darkT = false;

document.querySelector("header > button").addEventListener("click", () => {
  if (darkT === false) {
    darkT = true;
    document.querySelector(":root").classList.add("dark-theme-stats-bg");
    document.querySelector(".search-bar").classList.add("dark-theme");
    document.querySelector(".user-profile").classList.add("dark-theme");
    document.querySelector(".user-stats").classList.add("dark-theme-stats-bg");
    document.querySelector("header > button > img").src =
      "./assets/icon-sun.svg";
    document.querySelector("header > button > span").innerHTML = "LIGHT";
    document
      .querySelectorAll(
        ".search-bar input, header > button > span, .user-date span, .user-bio p, .user-links span, .user-links a, .user-stats span"
      )
      .forEach((item) => {
        item.classList.add("light-text");
      });
    document.querySelectorAll(".link path").forEach((item) => {
      item.style.fill = "#ffffff";
    });
  } else {
    document.querySelector(":root").classList.remove("dark-theme-stats-bg");
    document.querySelector(".search-bar").classList.remove("dark-theme");
    document.querySelector(".user-profile").classList.remove("dark-theme");
    document
      .querySelector(".user-stats")
      .classList.remove("dark-theme-stats-bg");
    document.querySelector("header > button > img").src =
      "./assets/icon-moon.svg";
    document.querySelector("header > button > span").innerHTML = "DARK";
    document
      .querySelectorAll(
        ".search-bar input, header > button > span, .user-date span, .user-bio p, .user-links span, .user-links a, .user-stats span"
      )
      .forEach((item) => {
        item.classList.remove("light-text");
      });
    document.querySelectorAll(".link path").forEach((item) => {
      item.style.fill = "#4b6a9b";
    });
    darkT = false;
  }
});

//Search for user
document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const stringToSearch = document.querySelector(".search-bar input").value;
  const result = await searchUser(stringToSearch);
  const userInfo = "";
  if (result !== null && result !== undefined) {
    const userInfo = await getUserInfo(result[0].login);
    fillUserInfo(
      userInfo.name,
      userInfo.login,
      userInfo.created_at,
      userInfo.bio,
      userInfo.public_repos,
      userInfo.followers,
      userInfo.following,
      userInfo.location,
      userInfo.html_url,
      userInfo.twitter_username,
      userInfo.company,
      userInfo.avatar_url
    );
  }
});

// fill user info
function fillUserInfo(
  name,
  username,
  date,
  bio,
  repos,
  followers,
  following,
  location,
  url,
  twitter,
  job,
  avatar
) {
  if (name !== null) {
    document.querySelector(".user-name span").innerHTML = name;
  } else {
    document.querySelector(".user-name span").innerHTML = "No name";
  }
  document.querySelector(".user-date span").innerHTML = date;
  document.querySelector(".user-gh a").innerHTML = username;
  if (bio !== null) {
    document.querySelector(".user-bio p").innerHTML = bio;
  } else {
    document.querySelector(".user-bio p").innerHTML = "Not available";
  }
  document.querySelector(".repos-value").innerHTML = repos;
  document.querySelector(".followers-value").innerHTML = followers;
  document.querySelector(".following-value").innerHTML = following;
  if (location !== null) {
    document.querySelector(".link-l span").innerHTML = location;
  }
  if (twitter !== null) {
    document.querySelector(".link-t span").innerHTML = twitter;
  } else {
    document.querySelector(".link-t span").innerHTML = "Not available";
  }

  if (url !== null) {
    document.querySelector(".link-w a").innerHTML = url;
    document.querySelector(".link-w a").href = url;
  } else {
    document.querySelector(".link-w a").innerHTML = "Not available";
  }

  if (job !== null) {
    document.querySelector(".link-j span").innerHTML = job;
  } else {
    document.querySelector(".link-j span").innerHTML = "Not available";
  }
  if (avatar !== null) {
    document.querySelector(".user-image img").src = avatar;
  } else {
    document.querySelector(".user-image img").src = "./assets/Bitmap.png";
  }
}
