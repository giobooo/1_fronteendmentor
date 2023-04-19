import "../styles/_results.scss";
import externaIcon from "../assets/images/icon-new-window.svg";

function Results(props) {
  function playAudio() {
    document.querySelector("audio").play();
  }

  if (props.result === "") {
  } else if (!Array.isArray(props.result)) {
    return (
      <section className="error-section">
        <span>😕</span>
        <h4>No definitions found</h4>
        <p>
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </section>
    );
  } else if (props.result !== "") {
    return (
      <section className="results-section">
        <div className="result__word-phonetics">
          <div>
            <h2>{props.result[0].word}</h2>
            {props.result[0].phonetic !== null && (
              <h3>{props.result[0].phonetic}</h3>
            )}
          </div>
          {props.result[0].phonetics.length > 0 &&
            props.result[0].phonetics[0].audio !== "" && (
              <div>
                <button type="button" onClick={() => playAudio()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                  >
                    <g fill="#A445ED" fillRule="evenodd">
                      <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                      <path d="M29 27v21l21-10.5z" />
                    </g>
                  </svg>{" "}
                </button>
                <audio src={props.result[0].phonetics[0].audio} hidden></audio>
              </div>
            )}
        </div>
        {props.result[0].meanings.length > 0 &&
          props.result[0].meanings.map((p) => (
            <div
              key={
                p.partOfSpeech + Math.floor(Math.random() * 10000).toString()
              }
              className="result__meanings"
            >
              <div>
                <h3>{p.partOfSpeech}</h3>
                <div></div>
              </div>
              <h4>Meaning</h4>
              <ul>
                {p.definitions.length > 0 &&
                  p.definitions.map((d) => (
                    <li
                      key={
                        d.definition +
                        Math.floor(Math.random() * 10000).toString()
                      }
                    >
                      {d.definition}{" "}
                      {d.example !== undefined && <span>”{d.example}”</span>}
                    </li>
                  ))}
              </ul>
              {p.synonyms.length > 0 && (
                <div className="result__synonyms">
                  <h4>Synonyms</h4>
                  {p.synonyms.map((syn) => (
                    <span
                      key={syn + Math.floor(Math.random() * 10000).toString()}
                    >
                      {syn}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        {props.result[0].sourceUrls.length > 0 && (
          <div className="result__source">
            <span>Source</span>
            <a
              href={props.result[0].sourceUrls[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.result[0].sourceUrls[0]}
              <img src={externaIcon} alt=""></img>
            </a>
          </div>
        )}
      </section>
    );
  }
}
export default Results;
