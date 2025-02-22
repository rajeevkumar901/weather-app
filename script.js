const API_KEY = "Youe Api Key"; // Replace with your API key

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("location").innerText = `📍 ${data.location.name}, ${data.location.country},`;
        document.getElementById("temperature").innerText = `🌡 Temperature: ${data.current.temp_c}°C`;
        document.getElementById("condition").innerText = `🌤 Condition: ${data.current.condition.text}`;
        document.getElementById("weatherIcon").src = data.current.condition.icon;
        document.getElementById("airQuality").innerText = `🌍 Air Quality Index: ${data.current.air_quality.pm2_5}`;
    } catch (error) {
        alert("Error fetching weather data. Please try again.");
    }
}
