async function newRandomAdvice() {
  let id = null;
  let adviceT = null;

  //loads advice. if fails shows an error message.
  const advice = await fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((result) => {
      id = result.slip.id;
      adviceT = result.slip.advice;
    })
    .catch(() => {
      id = "000";
      adviceT = "Error retrieving advice";
    });

  // sets advice number and text
  document.getElementsByTagName("p").item(0).innerHTML = "“" + adviceT + "„";
  document.getElementsByTagName("h1").item(0).innerHTML = "ADVICE #" + id;
}

// loads a new advice on page load
newRandomAdvice();
