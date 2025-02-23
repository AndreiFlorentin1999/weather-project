// API Key-urile NU ar trebui sa fie stocate in format text, nu este sigur.
// Din pacate, fara un server, nu avem cum sa fim 100% safe, dar API-ul fiind gratuit, in cel mai rau caz cineva ne va bloca aplicatia temporar.
const API_KEY = "1dfc785b002d5d665921da5dfaba679b";

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
