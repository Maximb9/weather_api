const link = "http://api.weatherstack.com/current?access_key=bb9b12e131244d05701e24f6c41f5185";

const root = document.getElementById('root');


let store = {
  city: 'London',
  feelslike: 0,
  cloudcover: 0,
  temperature: 0,
  humidity: 0,
  observationTime: "08:39 AM",
  pressure: 0,
  uvIndex: 0,
  visibility: 0,
  isDay: 'yes',
  descriptions: '',
  wind_speed: 0
}


const fetchData = async() => {
    const result = await fetch(`${link}&query=${store.city}`); 
    const data = await result.json();

    const {
      current: { 
        feelslike, 
        cloudcover, 
        temperature, 
        observation_time: observationTime, 
        pressure, 
        uv_index: uvIndex, 
        visibility,
        is_day: isDay,
        weather_descriptions: descriptions,
        wind_speed: windSpeed
      },
    } = data;

    store = {
      ...store,
      feelslike,
      cloudcover,
      temperature,
      observationTime,
      pressure,
      uvIndex,
      visibility,
      isDay,
      windSpeed,
      descriptions: descriptions[0],
    }

    renderComponent();
}

const renderComponent = () => {
  root.innerHTML = `${store.temperature}°`
}

fetchData();