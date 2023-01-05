const weather_form = document.querySelector('form');
const search = document.querySelector('input');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

weather_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = search.value;
    const url =  `http://api.weatherstack.com/current?access_key=${config.API_KEY}&query=${city}`;
    await fetch(url)
        .then((response) => {
            const data = response.json();
            return data;
        })
        .then((data) => {
            return response = {
                city: data.location.name,
                country: data.location.country,
                weather_descriptions: data.current.weather_descriptions[0],
                temperature: data.current.temperature,
                precip: data.current.precip
            }
        })
        .then((response) => {
            p1.textContent = "In the city of " + response.city;
            p2.textContent = "The temperature is currently of " + response.temperature + " degrees Celsius";
            p3.textContent = "The current weather is " + response.weather_descriptions;
        })
        .catch((error) => {
            console.log(error);
        })
 });