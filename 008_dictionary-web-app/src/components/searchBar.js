import "../styles/_search-bar.scss";
import searchIcon from "../assets/images/icon-search.svg";
import { useEffect } from "react";

function SearchBar(props) {
  useEffect(() => {
    props.callback("computer");
  }, []);

  function submitAction(e) {
    e.preventDefault();
    let inputString = document.querySelector(".search-bar input").value;

    if (inputString !== null && inputString !== "") {
      props.callback(inputString);
      document.querySelector("form").classList.remove("error");
    } else {
      document.querySelector("form").classList.add("error");
    }
  }

  return (
    <form className="search-bar" onSubmit={(e) => submitAction(e)}>
      <label title="search box">
        <input type="text" placeholder="Search for any word..."></input>
        <span>Whoops, can’t be empty…</span>
      </label>
      <button type="submit" title="search button">
        <img src={searchIcon} alt=""></img>
      </button>
    </form>
  );
}

export default SearchBar;
