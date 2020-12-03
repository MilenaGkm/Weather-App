
class Manager {
	constructor() {
		this.cityData = []
	}

	getDataFromDB() {
		$.get("/cities", (cities) => {
			this.cityData = cities
		})
	}

	
	async getCityData(cityName) {
		console.log('a');
		try {
		await $.get(`/city/${cityName}`, (city) => {
			console.log('b');
			this.cityData = {
				CityName: city.name,
				Temperature: city.main.temp,
				Conditions: city.weather[0].description, 
				ConditionIcon: city.weather[0].icon
			}
			// console.log(this.cityData);
			console.log('c');
		})
		console.log('d');
		} catch (error) {
			// console.error(error);
			console.log('gg');
		}
		console.log('e');
	}


	saveCity(cityName) {
		console.log('a2');
		let city = this.cityData.find(city => city.cityName === cityName)

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



