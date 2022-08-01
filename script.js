const link = "http://api.weatherstack.com/current?access_key=bb9b12e131244d05701e24f6c41f5185";

const store = {
  city: 'London'
}

const fetchData = async() => {
    const result = await fetch(`${link}&query=${store.city}`); 
    const data = await result.json();

    const {
      current: { feelslike, cloudcover, temperature },
      location: { name }
    } = data;

    console.log(temperature);
}

fetchData();