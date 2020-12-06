
class Manager {
	constructor() {
		this.cityData = []
	}

	async getDataFromDB() {
		await $.get("/cities", (cities) => {
			this.cityData = cities
		})
	}

	
	async getCityData(cityName) {
		// try {
		await $.get(`/city/${cityName}`, (city) => {
			const cityToAdd = {
				CityName: city.name,
				Temperature: city.main.temp,
				Conditions: city.weather[0].description, 
				ConditionIcon: city.weather[0].icon
			}
			this.cityData.push(cityToAdd)
			console.log(this.cityData);
		})
		// } catch (error) {
		// 	console.log('gg');
		// }
	}


	saveCity(argCityName) {
		console.log(argCityName);
		// send api request to save scity as cityData
		let city = this.cityData.find(c => c.CityName == argCityName)
		console.log(city);

		$.post('/city', city, () => {
			console.log("it worked?");	
		})
	}


	removeCity(cityName) {
		console.log('remove?');

		$.ajax({
    		url: `/city/${cityName}`,
    		method: "DELETE",
    		success: () => {
				console.log('I guess');
			}
		})
	}

}



