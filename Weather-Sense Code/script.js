const button = document.getElementById("search-button")
const input = document.getElementById("city-input")

const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")

async function getData(city_name){
    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=33d6962e9914424a93671140242708&q=${city_name}&aqi=yes`)
    return await result.json()
}

button.addEventListener("click", async () => {
    const value = input.value
    const result = await getData(value)
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    cityTime.innerText = `${result.location.localtime}`
    cityTemp.innerText = `${result.current.temp_c}`
})


