export async function searchUser(stringSearch) {
  const user = await fetch(
    `https://api.github.com/search/users?q=${stringSearch}`
  )
    .then((result) => result.json())
    .then((parsed) => {
      return parsed.items;
    })
    .catch((error) => {
      return null;
    });

  return user;
}

export async function getUserInfo(username) {
  const userInfo = await fetch(`https://api.github.com/users/${username}`)
    .then((result) => result.json())
    .then((parsed) => {
      return parsed;
    })
    .catch((error) => {
      return null;
    });

  return userInfo;
}
