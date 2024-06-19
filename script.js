document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city);
});

function getWeather(city) {
    const apiKey = 'f985abd00a9bcd582f83def0704571e3'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('temperature').textContent = `${data.main.temp} °C`;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
