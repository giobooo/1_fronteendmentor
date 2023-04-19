import { createElement, useState } from "react";
import { SearchNewWord } from "../freeDictionaryAPI";
import SearchBar from "./searchBar";
import Results from "./results";
import "../styles/_loader.scss";

function Main() {
  const [dictionaryResult, updateResult] = useState("");
  const callback = async function SearchWord(word) {
    const loader = createLoader();
    const resultsSection = document.querySelector(".results-section");
    if (resultsSection !== null && resultsSection !== undefined) {
      resultsSection.style.display = "none";
    }
    document.querySelector("main").appendChild(loader);
    const dictionaryResult = await SearchNewWord(word);
    document.querySelector("main").removeChild(loader);
    if (resultsSection !== null && resultsSection !== undefined) {
      resultsSection.style.display = "block";
    }
    updateResult(dictionaryResult);
  };

  function createLoader() {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("lds-ellipsis");

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");

    mainDiv.appendChild(div1);
    mainDiv.appendChild(div2);
    mainDiv.appendChild(div3);
    mainDiv.appendChild(div4);

    return mainDiv;
  }

  return (
    <main>
      <SearchBar callback={callback}></SearchBar>
      <Results result={dictionaryResult}></Results>
    </main>
  );
}

export default Main;
