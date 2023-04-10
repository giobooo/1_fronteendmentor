const submitButton = document.getElementsByTagName("form").item(0);
const inputs = document.querySelectorAll("input");

function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function calculateAge(yearI, monthI, dayI) {
  const today = new Date();
  const birthDateObj = new Date(yearI, monthI - 1, dayI);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  let month = today.getMonth() - birthDateObj.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
    month += 12;
  }
  let day = today.getDate() - birthDateObj.getDate();
  if (day < 0) {
    month--;
    const daysInLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    day += daysInLastMonth;
  }
  return { years: age, months: month, days: day };
}

submitButton.addEventListener("submit", function (e) {
  e.preventDefault();

  let dayval = parseInt(document.querySelector(".day-i input").value);
  let monthval = parseInt(document.querySelector(".month-i input").value);
  let yearval = parseInt(document.querySelector(".year-i input").value);

  let validatedDay = null;
  let validatedMonth = null;
  let validatedYear = null;

  if (isNaN(dayval) || dayval > 31 || dayval < 1) {
    if (isNaN(dayval)) {
      document.querySelector(".day-i span").innerHTML =
        "This field is required";
    } else {
      document.querySelector(".day-i span").innerHTML = "Day is invalid";
    }
    document.querySelector(".day-i input").style.border =
      "1px solid hsl(0, 100%, 67%)";
    document.querySelector(".day-i label").style.color = "hsl(0, 100%, 67%)";
  } else {
    document.querySelector(".day-i input").style.border =
      "1px solid hsl(0, 1%, 44%)";
    document.querySelector(".day-i label").style.color = "hsl(0, 1%, 44%)";
    document.querySelector(".day-i span").innerHTML = "";
    validatedDay = dayval;
  }

  if (isNaN(monthval) || monthval > 12 || monthval < 1) {
    if (isNaN(monthval)) {
      document.querySelector(".month-i span").innerHTML =
        "This field is required";
    } else {
      document.querySelector(".month-i span").innerHTML = "Month is invalid";
    }
    document.querySelector(".month-i input").style.border =
      "1px solid hsl(0, 100%, 67%)";
    document.querySelector(".month-i label").style.color = "hsl(0, 100%, 67%)";
  } else {
    document.querySelector(".month-i input").style.border =
      "1px solid hsl(0, 1%, 44%)";
    document.querySelector(".month-i label").style.color = "hsl(0, 1%, 44%)";
    document.querySelector(".month-i span").innerHTML = "";
    validatedMonth = monthval;
  }

  let date = new Date();

  if (isNaN(yearval) || yearval > date.getFullYear() || yearval < 1) {
    if (isNaN(yearval)) {
      document.querySelector(".year-i span").innerHTML =
        "This field is required";
    } else if (yearval < 0) {
      document.querySelector(".year-i span").innerHTML = "Year is invalid";
    } else {
      document.querySelector(".year-i span").innerHTML = "Must be in the past";
    }
    document.querySelector(".year-i input").style.border =
      "1px solid hsl(0, 100%, 67%)";
    document.querySelector(".year-i label").style.color = "hsl(0, 100%, 67%)";
  } else {
    document.querySelector(".year-i input").style.border =
      "1px solid hsl(0, 1%, 44%)";
    document.querySelector(".year-i label").style.color = "hsl(0, 1%, 44%)";
    document.querySelector(".year-i span").innerHTML = "";
    validatedYear = yearval;
  }

  console.log(validatedDay + " " + validatedMonth + " " + validatedYear);

  if (
    validatedDay !== null &&
    validatedMonth !== null &&
    validatedYear !== null
  ) {
    if (isValidDate(validatedDay, validatedMonth, validatedYear)) {
      document.querySelector(".day-i span").innerHTML = "";
      let age = calculateAge(validatedYear, validatedMonth, validatedDay);
      document.querySelector("#result-days").innerHTML =
        age.days + "<span> days</span>";
      document.querySelector("#result-months").innerHTML =
        age.months + "<span> months</span>";
      document.querySelector("#result-years").innerHTML =
        age.years + "<span> years</span>";
    } else {
      document.querySelector(".day-i span").innerHTML = "Date is invalid";
    }
  } else {
    document.querySelector("#result-days").innerHTML = "--<span> days</span>";
    document.querySelector("#result-months").innerHTML =
      "--<span> months</span>";
    document.querySelector("#result-years").innerHTML = "--<span> years</span>";
  }
});
