import fetch from 'node-fetch';

const weather = async function(city) {
    const url =  `http://api.weatherstack.com/current?access_key=${config.API_KEY}&query=${city}`;
    await fetch(url)
        .then((response) => {
            const data = response.json();
            return data;
        })
        .then((data) => {
            return {
                city: data.location.name,
                country: data.location.country,
                weather_descriptions: data.current.weather_descriptions[0],
                temperature: data.current.temperature,
                precip: data.current.precip
            }
        })
        .catch((error) => {
            console.log(error);
        })
};

export default weather;