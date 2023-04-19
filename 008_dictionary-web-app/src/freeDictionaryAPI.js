export async function SearchNewWord(word) {
  const searchResult = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  )
    .then((result) => result.json())
    .then((parsedResult) => {
      return parsedResult;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  if (
    searchResult === undefined ||
    searchResult === null ||
    searchResult === ""
  ) {
    return null;
  } else {
    return searchResult;
  }
}
