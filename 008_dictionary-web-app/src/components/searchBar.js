import "../styles/_search-bar.scss";
import searchIcon from "../assets/images/icon-search.svg";

function SearchBar() {
  return (
    <form className="search-bar">
      <label title="search box">
        <input type="text" placeholder="Search for any word..."></input>
      </label>
      <button type="button">
        <img src={searchIcon} alt=""></img>
      </button>
    </form>
  );
}

export default SearchBar;
