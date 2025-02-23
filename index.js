const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");


if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}


currentCityTag.innerHTML = currentCity;


displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);


const scrollToTopButton = document.querySelector(".scroll-to-top");

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
document.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight / 2) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});

usernameInput.addEventListener("change", function (event) {
  const value = event.target.value;
  if (value.length < 3) {
    usernameError.innerHTML =
      "Username-ul trebuie sa contina minim 3 caractere.";
  } else {
    usernameError.innerHTML = "";
  }
});
