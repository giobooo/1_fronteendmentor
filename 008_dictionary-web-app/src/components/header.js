import "../styles/_header.scss";
import moonIcon from "../assets/images/icon-moon.svg";
import logoIcon from "../assets/images/logo.svg";
import { useEffect, useState } from "react";

function Header() {
  useEffect(() => {
    document.body.classList.remove("sans-serif");
    document.body.classList.remove("serif");
    document.body.classList.remove("mono");
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    document.body.classList.add("sans-serif");
  }, []);

  function switchTheme() {
    if (!document.querySelector("header input").checked) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }

  const [dropdownState, updateState] = useState(false);

  function openCloseDropdown() {
    if (dropdownState === false) {
      document.querySelector(".dropdown-menu").setAttribute("open", "true");
      document.querySelector(".arrow-font").setAttribute("open", "true");
      updateState(true);
    } else {
      document.querySelector(".dropdown-menu").setAttribute("open", "false");
      document.querySelector(".arrow-font").setAttribute("open", "false");
      updateState(false);
    }
  }

  function changeFont(font) {
    document.body.classList.remove("sans-serif");
    document.body.classList.remove("serif");
    document.body.classList.remove("mono");

    if (font === "sans") {
      document.body.classList.add("sans-serif");
      document.querySelector(".font-selector > button > span").innerHTML =
        "Sans Serif";
    } else if (font === "serif") {
      document.body.classList.add("serif");
      document.querySelector(".font-selector > button > span").innerHTML =
        "Serif";
    } else {
      document.body.classList.add("mono");
      document.querySelector(".font-selector > button > span").innerHTML =
        "Mono";
    }
  }

  return (
    <header>
      <div>
        <img src={logoIcon} alt=""></img>
      </div>
      <div className="font-selector">
        <button type="button" onClick={() => openCloseDropdown()}>
          <span>Sans Serif</span>
          <svg
            className="arrow-font"
            open="false"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
          >
            <path
              fill="none"
              stroke="#A445ED"
              stroke-width="1.5"
              d="m1 1 6 6 6-6"
            />
          </svg>
        </button>
        <div className="dropdown-menu" open="false">
          <button type="button" onClick={() => changeFont("sans")}>
            Sans Serif
          </button>
          <button type="button" onClick={() => changeFont("serif")}>
            Serif
          </button>
          <button type="button" onClick={() => changeFont("mono")}>
            Mono
          </button>
        </div>
        <label className="dark-light-switch">
          <input type="checkbox" onChange={() => switchTheme()}></input>
          <span></span>
        </label>
        <img src={moonIcon} alt=""></img>
      </div>
    </header>
  );
}

export default Header;
